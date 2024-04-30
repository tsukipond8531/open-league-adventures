<script context="module" lang="ts">
	import Idle from './Idle.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Views/Idle',
		component: Idle,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<Idle>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="max-w-screen-sm mx-auto">
		<Idle {...args}></Idle>
	</div></Template
>

<Story name="Base">
	<div class="mx-auto h-[90svh] max-w-screen-sm">
		<Idle></Idle>
	</div>
</Story>
