<script context="module" lang="ts">
	import List, { type ClanSummary } from './List.svelte';
	import { faker } from '@faker-js/faker';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	export const meta = {
		title: 'Views/Clan/List',
		component: List,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	} satisfies Meta<List>;

	const clans: ClanSummary[] = new Array(20).fill(null).map((_) => {
		return {
			id: faker.string.uuid(),
			name: faker.internet.userName(),
			power: faker.number.int(),
			rank: faker.number.int({
                min: 0,
                max: 5000
            }),
            description: faker.lorem.words(6),
		};
	});
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';

	import type { Meta, StoryObj } from '@storybook/svelte';

	type Story = StoryObj<typeof meta>;
</script>

<Template let:args>
	<div class="max-w-screen-sm mx-auto">
		<List {...args}></List>
	</div></Template
>

<Story name="No Clan">
	<div class="mx-auto h-[90svh] max-w-screen-sm">
		<List {clans} userClan={clans[0]}></List>
	</div>
</Story>
