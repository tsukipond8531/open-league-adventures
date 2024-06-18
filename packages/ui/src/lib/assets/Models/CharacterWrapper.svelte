<script context="module" lang="ts">
	export type AllowedModels = 'Knight' | 'Mage' | 'Skeleton' | "Rogue";

	export function classNameToModel(className: string) {
		switch (className) {
			case 'Warrior':
				return Knight;
			case 'Black Mage':
				return Mage;
			case 'White Mage':
				return Mage;
			case 'Ranger':
				return Rogue;

			default:
				return Knight;
		}
	}
</script>

<script lang="ts">
	import { T, type CurrentWritable } from '@threlte/core';
	import { AnimationAction } from 'three';
	import Mage, { type ActionName } from './Mage/Mage.svelte';
	import Skeleton from './Skeleton/Skeleton_Minion.svelte';
	import Knight from './Knight.svelte';
	import Rogue from "./Rogue/Rogue.svelte";
	import { getContext, onMount } from 'svelte';
	import type { Message } from '$lib/components/app/Views/Combat/CombatView.svelte';
	import type { EventBus } from '$lib/components/app/Views/Combat/EventBus';

	let actions: CurrentWritable<Partial<Record<ActionName, AnimationAction>>>;

	export let model: AllowedModels = 'Knight';

	$: usedModel = ((modelName: AllowedModels) => {
		return classNameToModel(modelName);
	})(model);

	const bus: EventBus<{
		characterID: number;
		action: 'attack' | 'die';
	}> = getContext('bus');

	onMount(() => {
		actions.subscribe((value) => {
			value['Idle']?.play();
		});
		bus?.subscribe('battle', handleBattleMessage);

		return () => {
			bus?.unsubscribe('battle', handleBattleMessage);
		};
	});

	function handleBattleMessage(message: Message) {
		if (message.characterID === ID) {
			switch (message.action) {
				case 'attack':
					onAttack();
					break;
				case 'damage':
					onDamaged();
					break;
				case 'die':
					onDie();
					break;
				default:
					break;
			}
		}
	}

	const onAttack = () => {
		const duration = 0.5;

		const actionManager = $actions['1H_Melee_Attack_Chop']!;

		actionManager.paused = false;
		actionManager?.setDuration(duration).play();

		setTimeout(() => {
			actionManager!.paused = true;
		}, duration * 1000);
	};
	const onDamaged = () => {
		const duration = 0.5;
		const actionManager = $actions['Hit_A']!;
		actionManager.paused = false;
		actionManager?.setDuration(duration).play();

		setTimeout(() => {
			actionManager!.paused = true;
		}, duration * 1000);
	};

	const onDie = () => {
		const actionManager = $actions['Death_A']?.play();
		actionManager!.repetitions = 1;

		$actions['Death_A_Pose']?.play();
	};

	export let ID: string;
</script>

<svelte:component this={usedModel} bind:actions {...$$restProps}></svelte:component>
