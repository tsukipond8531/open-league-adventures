<script context="module" lang="ts">
	import BottomNav from './BottomNav.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Navigation/Bottom Navbar',
		component: BottomNav,
		tags: ['autodocs'],
		argTypes: {},
		args: {
			active: 'Team'
		}
	} satisfies Meta<BottomNav>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
	
</script>

<Template let:args>
	<BottomNav {...args}></BottomNav>
</Template>

<Story name="Square" source args={{active: "Adventure"}}/>

<Story name="Empty">
	<BottomNav></BottomNav>
</Story>
