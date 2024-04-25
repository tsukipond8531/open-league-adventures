<script lang="ts">
	import { onMount } from 'svelte';

	import {
		RequestStartFight,
		ServerFightMessage,
		FightServiceClient,
		ClientFightMessage
	} from 'protos';
	import { GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
	onMount(async () => {
		return;
		const transport = new GrpcWebFetchTransport({
			baseUrl: 'http://localhost:3000',
			format: 'binary'
		});

		const client = new FightServiceClient(transport);
		const stream = client.requestFightStart({
			playerId: 'me'
		});

		for await (const message of stream.responses) {
			console.log(message);

			const { payload } = message;
			if (payload.oneofKind === 'startFight') {
				console.log('startFight', payload.startFight);
				payload.startFight.fightId;
			} else if (payload.oneofKind === 'fightAction') {
				console.log('fightAction', payload.fightAction);
			}
		}

		// client.requestFightNextTick();

		const startFightMessage = ClientFightMessage.create({
			clientMessage: {
				oneofKind: 'requestStartFight',
				requestStartFight: RequestStartFight.create({
					playerId: 'me'
				})
			}
		});

		ServerFightMessage.create({
			payload: {
				oneofKind: 'startFight',
				startFight: {
					fightId: 100,
					enemyCharacters: [
						{
							attack: 10,
							defense: 5,
							maxHp: 100,
							speed: 10
						}
					],
					playerCharacters: [
						{
							attack: 10,
							defense: 5,
							maxHp: 100,
							speed: 10
						}
					]
				}
			}
		});

		ServerFightMessage.create({
			payload: {
				oneofKind: 'fightAction',
				fightAction: {
					action: {
						oneofKind: 'fightActionAttack',
						fightActionAttack: {
							attacker: 0,
							defender: 1,
							damage: 10
						}
					},
					actionResult: [
						{
							target: { isPlayer: true, unitId: 0 },
							actionResultPayload: {
								oneofKind: 'actionResultDamage',
								actionResultDamage: {
									unitDies: true,
									value: 100
								}
							}
						}
					]
				}
			}
		});
	});
</script>

fight page
