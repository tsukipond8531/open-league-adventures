<script lang="ts">
	import { onMount, setContext } from 'svelte';

	import { FightServiceClient, EndFight } from 'protos';
	import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
	import { Button } from '$lib/components/ui/button';
	import { derived, writable, type Readable, type Writable } from 'svelte/store';
	import type { BattleState, BattleAction } from '$lib/types/battle.js';
	import { Views, Combat } from 'ui';
	import { PUBLIC_API_SERVER } from '$env/static/public';
	import { payloadToInitialState, payloadMessageTo } from './utils.js';
	import { Canvas } from '@threlte/core';
	export let data;

	function sleep(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let initialState: BattleState | null = null;

	let client: FightServiceClient;
	let fightID: number;

	function classNameToModel(className: string) {
		// FIXME: Add missing classes
		switch (className) {
			case 'Black Mage':
				return 'Mage';
			case 'Warrior':
				return 'Knight';

			default:
				return 'Skeleton';
				break;
		}
	}

	onMount(async () => {
		// TODO: we need a coroutine that will keep fetching messages until it's over
		const transport = new GrpcWebFetchTransport({
			baseUrl: PUBLIC_API_SERVER,
			format: 'binary'
		});

		client = new FightServiceClient(transport);
		const stream = client.requestFightStart(
			{
				playerId: data.userID.toString()
			},
			{}
		);

		const notifier = roundNotifier(currentState, client);

		for await (const message of stream.responses) {
			const { payload } = message;

			if (payload.oneofKind === 'startFight') {
				fightID = payload.startFight.fightId;
				initialState = payloadToInitialState(payload.startFight);

				initialState.pawns = initialState.pawns.map((p, i) => {
					if (data.characters) {
						return {
							...p,
							model: classNameToModel(data.characters[i].class!)
						};
					} else {
						return { ...p, model: 'Knight' };
					}
				});
				initialState.enemies = initialState.enemies.map((p, i) => {
					return { ...p, model: 'Skeleton' };
				});

				currentState.initialize(initialState);
			}
			if (payload.oneofKind === 'fightAction') {
				const action = payloadMessageTo(payload.fightAction);

				currentState.tick(action);
			}

			if (payload.oneofKind === 'endFight') {
				currentState.end(payload.endFight);
			}
		}

		return () => {
			clearInterval(notifier);
		};
	});

	const roundNotifier = (state: Readable<BattleState>, client: FightServiceClient) => {
		return setInterval(() => {
			if ($currentState.end) {
				return;
			} else {
				client.requestFightNextTick({ fightId: fightID });
			}
		}, 1000);
	};

	const currentState = (() => {
		// @ts-expect-error we do not want to deal with a nullable type when we're only going to be consuming it once it's been initialized
		const { subscribe, set, update } = writable<BattleState>(null);

		return {
			subscribe,
			initialize: (state: BattleState) => {
				set(state);
			},
			tick: (action: BattleAction) => {
				update((state) => {
					const transmutedSender =
						action.origin.from === 'Enemy'
							? `OPPONENT_${action.origin.unitId}`
							: `ALLIED_${action.origin.unitId}`;

					const transmutedTarget =
						action.target.to === 'Enemy'
							? `OPPONENT_${action.target.unitId}`
							: `ALLIED_${action.target.unitId}`;

					eventBus.send('battle', {
						characterID: transmutedSender,
						action: 'attack'
					});

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
					eventBus.send('battle', {
						characterID: transmutedTarget,
						action: 'damage',
						damage: action.result.damage
					});

					return state;
				});
			},
			end: (tick: EndFight) => {
				update((state) => {
					state.end = {
						experience: tick.experience,
						isPlayerVictory: tick.isPlayerVictory,
						gold: tick.gold ?? 0
					};
					return state;
				});
			}
		};
	})();

	const eventBus = new Views.EventBus();

	setContext('bus', eventBus);

	const outcome = derived(currentState, ($currentState) => {
		if ($currentState && $currentState.end) {
			return {
				gold: $currentState.end.gold,
				experience: $currentState.end.experience,
				outcome: $currentState.end.isPlayerVictory ? 'victory' : 'defeat'
			};
		}
		return null;
	});
</script>

{#if $currentState}
	<div class="relative h-full">
		<div id="css-renderer-target" />
		<!-- FIXME: gold should be fed from state -->
		<Combat.Overlay outcome={$outcome}></Combat.Overlay>
		<Canvas>
			<Views.CombatView teamCharacters={$currentState.pawns} opponents={$currentState.enemies} />
		</Canvas>
	</div>
{/if}

<style>
	:global(canvas) {
		position: absolute;
		@apply inset-0;
	}
</style>
