<script context="module" lang="ts">
	import Icon from './Icon.svelte';
	import frog from '$lib/assets/frog.png';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Character/Icon',
		component: Icon,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<Icon>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
	
</script>

<Template let:args>
	<Icon {...args}></Icon>
</Template>

<Story name="Empty">
	<Icon img={frog}></Icon>
</Story>
