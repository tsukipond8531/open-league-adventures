<script lang="ts" context="module">
	export type ClanSummary = {
		id: string;
		name: string;
		power: number;
		rank: number;
		description: string;
	};
</script>

<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Drawer from '$lib/components/ui/drawer/index.js';
	import CupIcon from '$lib/assets/Itemicon_Trophy_Gold.png';
	import { PlusCircleIcon, PlusIcon } from 'lucide-svelte';
	import RankingCard from '../../RankingCard/RankingCard.svelte';
	export let clans: ClanSummary[];

	$: powerDisplay = (power: number) => {
		const units = ['', 'k', 'm', 'g', 't', 'p', 'e', 'z', 'y'];

		let unit = 0;
		while (power > 1000) {
			power /= 1_000;
			unit++;
		}

		const formatter = new Intl.NumberFormat(undefined, {
			maximumSignificantDigits: 3
		});
		return `${formatter.format(power)}${units[unit].toUpperCase()}`;
	};

	export let userClan: ClanSummary | null = null;
</script>

<div class="px-4">
	<h1 class="text-xl font-bold">Join a clan!</h1>
	<div>Play together and reach higher ranks!</div>
</div>

<div class="relative flex flex-col max-h-full px-4 mt-4 space-y-4 pb-36">
	{#each clans as clan, i}
		<Drawer.Root>
			<Drawer.Trigger>
				<RankingCard value={clan} />
			</Drawer.Trigger>
			<Drawer.Content class="">
				<div class="w-full max-w-sm mx-auto">
					<Drawer.Header>
						<Drawer.Title>{clan.name}</Drawer.Title>
						<Drawer.Description>{clan.description}</Drawer.Description>
					</Drawer.Header>
					<div class="p-4 pb-0">
						<div>
							{clan.power}
						</div>
					</div>
					<Drawer.Footer>
						{#if userClan}
							<Button disabled>Already joined a Clan</Button>
						{:else}
							<Button>Join Clan</Button>
						{/if}
					</Drawer.Footer>
				</div>
			</Drawer.Content>
		</Drawer.Root>
	{/each}
</div>

{#if userClan}
	<div class="absolute bottom-0 left-0 right-0 p-4 bg-primary">
		<div class="bg-card flex h-[80px] items-stretch space-x-4 overflow-hidden rounded-xl shadow">
			<div
				class="flex flex-col items-center justify-center bg-primary aspect-square rounded-tr-2xl bg-opacity-20"
			>
				<div class="text-xl font-semibold text-primary">
					{userClan.rank}
				</div>
			</div>
			<div class="flex flex-col justify-center flex-grow text-left">
				<div class="text-lg font-semibold">{userClan.name}</div>
				<div>how many in</div>
			</div>
			<div class="flex items-center pr-4 space-x-3">
				<div>
					{powerDisplay(userClan.power)}
				</div>
				<img src={CupIcon} alt="Trophy icon" width="36" />
			</div>
		</div>
	</div>
{:else}
	<div class="absolute bottom-0 left-0 right-0 px-4 py-2 bg-primary">
		<button class="block w-full">
			<div class="flex items-center justify-center py-4 shadow bg-card rounded-xl">
				<PlusCircleIcon class="w-6 h-6 mr-2 text-muted-foreground" />
				<div class="text-lg">Create a clan</div>
			</div>
		</button>
	</div>
{/if}
