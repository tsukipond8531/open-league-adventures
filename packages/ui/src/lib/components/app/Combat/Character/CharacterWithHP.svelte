<script lang="ts" context="module">
	export type CharacterContext = {
		position: [number, number, number];
		currentHP: Writable<number>;
		maxHP: number;
		model: 'Skeleton' | 'Knight' | 'Mage';
	};
</script>

<script lang="ts">
	import CssObject from '../../Views/Combat/CssObject.svelte';
	import HealthGradient from '../../Views/Combat/HealthGradient.svelte';
	import CharacterWrapper from '$lib/assets/Models/CharacterWrapper.svelte';
	import { derived, get, readable, type Readable, type Writable } from 'svelte/store';
	import { getContext, onMount } from 'svelte';
	import type { EventBus } from '../../Views/Combat';
	import type { Message } from '$lib/components/app/Views/Combat/CombatView.svelte';

	export let id: string;

	const characterContext: CharacterContext = getContext(id);
	const bus: EventBus<{
		characterID: number;
		action: 'attack' | 'die' | 'damage';
		damage?: number;
	}> = getContext('bus');

	onMount(() => {
		bus.subscribe('battle', handleBattleMessage);

		return () => {
			bus.unsubscribe('battle', handleBattleMessage);
		};
	});

	function handleBattleMessage(message: Message) {
		if (message.characterID === id) {
			switch (message.action) {
				case 'damage':
					onDamage(message.damage!);
					break;
				default:
					break;
			}
		}
	}

	const healthPercentage = derived(
		[characterContext.currentHP],
		([$currentHP]) => ($currentHP / characterContext.maxHP) * 100
	);

	function onDamage(damage: number) {
		characterContext.currentHP.set(get(characterContext.currentHP) - damage);
	}
</script>

<CssObject position={characterContext.position} center={[0.5, 11]}>
	<HealthGradient {healthPercentage} />
	<CharacterWrapper ID={id} model={characterContext.model} slot="three" {...$$restProps}
	></CharacterWrapper>
</CssObject>
