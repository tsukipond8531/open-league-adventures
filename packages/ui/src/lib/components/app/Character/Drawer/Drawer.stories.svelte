<script context="module" lang="ts">
	import Drawer from './Drawer.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Character/Drawer',
		component: Drawer,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<Drawer>;
	//export default meta;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
	

    const hero = {
        name: 'Frog',
        level: 5,
        rarity: 3,
        image: 'frog',
        available: true,
        class: 'Warrior',
        health: 100,
        attack: 100,
        defense: 100,
        speed: 100
    };
</script>

<Template let:args>
	<Drawer {...args}></Drawer>
</Template>

<Story name="Empty">
    <div class="max-w-[422px]">

        <Drawer hero={hero}></Drawer>
    </div>
</Story>
