<script lang="ts">
	import { onMount } from 'svelte';

	import {
		RequestStartFight,
		ServerFightMessage,
		FightServiceClient,
		ClientFightMessage,
		FightAction,
		StartFight
	} from 'protos';
	import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
	import { Button } from '$lib/components/ui/button';
	import { writable, type Writable } from 'svelte/store';

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let messages: unknown[] = [];
	let initialState: { fightId: number; enemies: any[]; pawns: any[] } | null = null;

	let client: FightServiceClient;
	let fightID: number;

	interface CharacterState {
		attack: number;
		defense: number;
		maxHP: number;
		currentHP: number;
		speed: number;
	}

	interface BattleState {
		fightId: number;
		enemies: CharacterState[];
		pawns: CharacterState[];
	}

	interface BattleAction {
		origin: {
			from: 'Player' | 'Enemy';
			unitId: number;
		};
		target: {
			to: 'Player' | 'Enemy';
			unitId: number;
		};
		result: {
			damage: number;
			unitDies: boolean;
		};
	}

	function payloadToInitialState(startFight: StartFight): BattleState {
		const { enemyCharacters, fightId, playerCharacters } = startFight;
		console.dir(playerCharacters);
		const enemies = enemyCharacters.map((c) => {
			return {
				attack: c.attack,
				defense: c.defense,
				maxHP: c.maxHp,
				currentHP: c.maxHp,
				speed: c.speed
			};
		});
		const pawns = playerCharacters.map((c) => {
			return {
				attack: c.attack,
				defense: c.defense,
				maxHP: c.maxHp,
				currentHP: c.maxHp,
				speed: c.speed
			};
		});

		return {
			fightId,
			enemies,
			pawns
		};
	}

	function payloadMessageTo(fightAction: FightAction): BattleAction {
		const { isPlayer, unitId } = fightAction.unitId!;

		const [actionResult] = fightAction.actionResult;

		const play: BattleAction = {
			origin: {
				from: isPlayer ? 'Player' : 'Enemy',
				unitId: unitId
			},
			target: {
				to: isPlayer ? 'Enemy' : 'Player',
				unitId: 0
			},
			// we're only handling damage for now
			result: {
				damage: 0,
				unitDies: false
			}
		};
		switch (actionResult.actionResultPayload.oneofKind) {
			case 'actionResultDamage':
				const { unitDies, value } = actionResult.actionResultPayload.actionResultDamage;
				play.target.unitId = actionResult.target!.unitId;
				play.result.damage = value;
				play.result.unitDies = unitDies;
				break;
			//return `${isPlayer ? 'Player' : 'Enemy'} ${unitId} takes ${value} damage. ${unitDies ? 'Unit dies' : ''}`;
			default:
				throw `Unimplemented action ${actionResult.actionResultPayload.oneofKind}`;
		}

		return play;
	}

	onMount(async () => {
		const transport = new GrpcWebFetchTransport({
			//baseUrl: 'http://localhost:10000',
			baseUrl: 'http://207.154.205.115:10000/',
			format: 'binary'
		});

		client = new FightServiceClient(transport);
		const stream = client.requestFightStart(
			{
				playerId: 'Bogdanoff'
			},
			{}
		);

		let endFight = false;

		for await (const message of stream.responses) {
			const { payload } = message;
			//messages = [...messages, payload];

			if (payload.oneofKind === 'startFight') {
				console.log('startFight', payload.startFight);
				fightID = payload.startFight.fightId;
				console.dir(payload.startFight);
				initialState = payloadToInitialState(payload.startFight);

				currentState.initialize(initialState);
			}
			if (payload.oneofKind === 'fightAction') {
				console.log('fightAction', payload.fightAction);
				const action = payloadMessageTo(payload.fightAction);

				messages = [
					...messages,
					`${action.origin.from} ${action.origin.unitId} attacks ${action.target.to} ${action.target.unitId} for ${action.result.damage} damage. ${action.result.unitDies ? 'Unit dies' : ''}`
				];

				currentState.tick(action);
			}

			if (payload.oneofKind === 'endFight') {
				console.log('endFight', payload.endFight);
				endFight = true;
			}
			/*
			await sleep(1000);

			if (!endFight) {
				console.log('querying new tick');
				const request = await client.requestFightNextTick({ fightId: fightID! });
				console.dir(request);
			}*/
		}
	});

	const currentState = (() => {
		// @ts-expect-error we do not want to deal with a nullable type when we're only going to be consuming it once it's been initialized
		const { subscribe, set, update } = writable<BattleState>(null);

		return {
			subscribe,
			initialize: (state: BattleState) => {
				set(state);
			},
			tick: (action: BattleAction) => {
				// TODO: animations

				action.result.damage;
				action.result.unitDies;

				action.target.unitId;
				action.target.to;

				update((state) => {
					if (action.target.to === 'Enemy') {
						state.enemies[action.target.unitId].currentHP -= action.result.damage;
						state.enemies[action.target.unitId].currentHP = Math.max(
							0,
							state.enemies[action.target.unitId].currentHP
						);
					} else {
						state.pawns[action.target.unitId].currentHP -= action.result.damage;
						state.pawns[action.target.unitId].currentHP = Math.max(
							0,
							state.pawns[action.target.unitId].currentHP
						);
					}

					return state;
				});
			}
		};
	})();
</script>

<div class="py-2">
	<Button on:click={() => client.requestFightNextTick({ fightId: fightID })}>Get Next Tick</Button>
</div>
<div class="grid gap-6" style="">
	<div>
		<div class="font-bold">Enemies</div>
		<div class="space-y-2">
			{#if $currentState}
				{#each $currentState.enemies as enemy, i}
					<div class="py-2 break-before-all border-y">
						{i} : {enemy.currentHP} / {enemy.maxHP} HP
					</div>
				{/each}
			{/if}
		</div>
	</div>
	<div>
		<div class="font-bold">Pawns</div>
		<div class="space-y-2">
			{#if $currentState}
				{#each $currentState.pawns as pawn, i}
					<div class="py-2 break-before-all border-y">{i}: {pawn.currentHP} / {pawn.maxHP} HP</div>
				{/each}
			{/if}
		</div>
	</div>
</div>
<div class="max-h-[400px] space-y-3 overflow-y-auto">
	{#each messages as message, i}
		<div class="py-2 border-y">{i}: {JSON.stringify(message)}</div>
	{/each}
</div>
