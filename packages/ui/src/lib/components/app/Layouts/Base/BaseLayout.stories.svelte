<script context="module" lang="ts">
	import BaseLayout from './BaseLayout.svelte';
	import frog from '$lib/assets/frog.png';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Layout/Base',
		component: BaseLayout,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<BaseLayout>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="max-w-screen-sm mx-auto">
		<BaseLayout {...args}></BaseLayout>
	</div>
</Template>

<Story name="Empty">
	<BaseLayout>
		<div class="h-[300px] border border-red-500"></div>
	</BaseLayout>
</Story>
