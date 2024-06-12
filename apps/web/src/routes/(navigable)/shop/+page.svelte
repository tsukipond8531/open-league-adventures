<script lang="ts">
	import { Views, ShopSection, ShopSectionType } from 'ui';
	import ShopCard from './ShopCard.svelte';
	import { ShoppingBag, ThumbsUp, TicketCheck } from 'lucide-svelte';

	const shopItem = {
		title: 'Chest of Coins and Gems',
		price: 10,
		image: '/IconGroup_ShopIcon_Chest.png',
		description: '10k Coin + 2k Gems'
	};

	export let data;
</script>

{#if data.offers.length === 0}
	<div class="flex flex-col items-center justify-center h-full max-h-full">
		<div class="bg-muted text-muted-foreground rounded-full p-2.5">
			<ShoppingBag></ShoppingBag>
		</div>
		<div class="mt-3 text-sm text-center">No shop offer available</div>
	</div>
{:else}
	<div class="max-h-full py-4 space-y-16 overflow-y-auto">
		{#each data.offers as category}
			{@const section = category.section}
			{@const items = category.items}

			<ShopSection sectionType={ShopSectionType.Basic} header={section.title}>
				<div class="grid grid-cols-2 grid-rows-1 gap-3 md:gap-6">
					{#each items as item}
						<ShopCard content={item}></ShopCard>
					{/each}
				</div>
			</ShopSection>
		{/each}
		<!-- 
		<ShopSection sectionType={ShopSectionType.Bundle} header={'Bundle'}>
			<div
				class="w-full h-48 bg-center bg-cover border rounded-sm aspect-video"
				style="background-image: url('https://th.bing.com/th/id/OIG2.Tnzf3Fli3zDwdKktC6uZ');"
			>
				<div class="relative flex flex-col justify-between h-full p-3 bg-black/40">
					<div>
						Hero <span>HeroName</span>
						<div>Additional Gems and Gold</div>
					</div>
					<div class="flex items-end justify-between">
						<div class="text-lg font-medium">Welcome Bundle</div>
						<div class="text-right">
							<div class="text-sm line-through decoration-red-500 decoration-2">5 TON</div>
							<div class="text-xl font-semibold">2 TON</div>
						</div>
					</div>
					<div
						class="absolute top-0 right-0 p-2 bg-center bg-contain rotate-12"
						style="background-image: url('/Label_Tag04_Color_Purple.png');"
					>
						<ThumbsUp class="text-transparent fill-white" size="24"></ThumbsUp>
					</div>
				</div>
			</div>
		</ShopSection>

		<ShopSection sectionType={ShopSectionType.Basic} header={'Basic'}>
			<div class="grid grid-cols-2 grid-rows-1 gap-3 md:gap-6">
				<ShopCard content={shopItem}></ShopCard>

				<ShopCard content={shopItem}></ShopCard>
			</div>
		</ShopSection>

		<ShopSection sectionType={ShopSectionType.Basic} header={'Basic'}>
			<div class="grid grid-cols-2 grid-rows-1 gap-3 md:gap-6">
				<ShopCard content={shopItem}></ShopCard>

				<ShopCard content={shopItem}></ShopCard>
			</div>
		</ShopSection>

		<ShopSection sectionType={ShopSectionType.Event} header={'Launch Event'}>
			<div class="grid grid-cols-2 grid-rows-1 gap-3 md:gap-6">
				<ShopCard content={shopItem}></ShopCard>

				<ShopCard content={shopItem}></ShopCard>
			</div>
		</ShopSection>
	-->
	</div>
{/if}
