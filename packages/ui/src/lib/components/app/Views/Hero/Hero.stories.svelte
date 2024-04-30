<script context="module" lang="ts">
	import Hero from './Hero.svelte';
	import frog from '$lib/assets/frog.png';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Views/Hero',
		component: Hero,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<Hero>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="max-w-screen-sm mx-auto">
		<Hero {...args}></Hero>
	</div></Template
>

<Story name="Empty">
	<div class="max-w-screen-sm mx-auto">
		<Hero></Hero>
	</div>
</Story>
