<script context="module" lang="ts">
	import Gameplay from './Gameplay.svelte';
	import frog from '$lib/assets/frog.png';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Views/Gameplay',
		component: Gameplay,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<Gameplay>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="max-w-screen-sm mx-auto">
		<Gameplay {...args}></Gameplay>
	</div></Template
>

<Story name="Base">
	<div class="h-[90svh] max-w-screen-sm mx-auto">
		<Gameplay></Gameplay>
	</div>
</Story>
