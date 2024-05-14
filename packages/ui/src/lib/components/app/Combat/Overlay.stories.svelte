<script context="module" lang="ts">
	import Overlay from './Overlay.svelte';
	import type { Outcome } from './Overlay.svelte';
	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Combat/Result Overlay',
		component: Overlay,
		tags: ['autodocs']
		// argTypes: {},
		// args: {}
	} satisfies Meta<Overlay>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="relative w-full max-w-sm border border-red-500 h-96">
		<Overlay {...args}></Overlay>
	</div>
</Template>

<Story name="Empty" args={{ outcome: null }}></Story>

<Story
	name="With Outcome"
	args={{
		outcome: {
			experience: 100,
			gold: 50,
			outcome: 'victory'
		}
	}}
></Story>
