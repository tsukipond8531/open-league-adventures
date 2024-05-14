<script context="module" lang="ts">
	import CombatView, { type Message } from './CombatView.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Combat/CombatView',
		component: CombatView,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<CombatView>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { Canvas } from '@threlte/core';

	import type { Meta, StoryObj } from '@storybook/svelte';
	import type { CharacterState } from './combat.types';
	import { onMount, setContext } from 'svelte';
	import { EventBus } from './EventBus';
	import type { Outcome } from '../../Combat/Overlay.svelte';
	import { type Writable, writable } from 'svelte/store';
	import Overlay from '../../Combat/Overlay.svelte';

	type Story = StoryObj<typeof meta>;

	let teamCharacters: (CharacterState & { model: string })[] = [
		{
			currentHP: 100,
			maxHP: 100,
			model: 'Knight'
		},
		{
			currentHP: 100,
			maxHP: 100,
			model: 'Mage'
		},
		{
			currentHP: 100,
			maxHP: 100,
			model: 'Knight'
		},
		{
			currentHP: 100,
			maxHP: 100,
			model: 'Mage'
		}
	];

	const opponents: (CharacterState & { model: string })[] = [
		{
			currentHP: 100,
			maxHP: 100,
			model: 'Skeleton'
		},
		{
			currentHP: 100,
			maxHP: 100,
			model: 'Mage'
		}
	];

	const eventBus = new EventBus<Message>();

	setContext('bus', eventBus);

	onMount(() => {
		setTimeout(() => {
			eventBus.send('battle', {
				characterID: 'ALLIED-0',
				action: 'die'
			});
		}, 2000);
	});

	let outcome: Outcome | null = null;
</script>

<Template let:args>
	<div class="relative max-w-sm border border-red-500 h-96">
		<div id="css-renderer-target" />
		<Overlay {outcome}></Overlay>
		<Canvas>
			<CombatView {...args}></CombatView>
		</Canvas>
	</div>
</Template>

<Story name="Idle" args={{ teamCharacters, opponents }}></Story>

<Story name="Combat" args={{ teamCharacters, opponents }}></Story>

<Story name="Win" args={{ teamCharacters, opponents }}></Story>

<style>
	#css-renderer-target {
		left: 0;
		position: absolute;
		pointer-events: none;
		top: 0;
	}
</style>
