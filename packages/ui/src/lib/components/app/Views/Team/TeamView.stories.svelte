<script context="module" lang="ts">
	import Team from './Team.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Views/Team',
		component: Team,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<Team>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="max-w-screen-sm mx-auto">
		<Team {...args}></Team>
	</div></Template
>

<Story name="Empty">
	<div class="max-w-screen-sm mx-auto">
		<Team></Team>
	</div>
</Story>
