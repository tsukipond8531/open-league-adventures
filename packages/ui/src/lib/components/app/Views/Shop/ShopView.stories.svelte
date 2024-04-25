<script context="module" lang="ts">
	import ShopView from './ShopView.svelte';
	import frog from '$lib/assets/frog.png';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Views/Shop',
		component: ShopView,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<ShopView>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="max-w-screen-sm mx-auto">
		<ShopView {...args}></ShopView>
	</div></Template
>

<Story name="Empty">
	<div class="max-w-screen-sm mx-auto">
		<ShopView></ShopView>
	</div>
</Story>
