<script lang="ts" context="module">
	export type Hero = {
		id: string;
		name: string;
		level: number;
		rarity: number;
		image: string;
		class: string;
		health: number;
		attack: number;
		defense: number;
		speed: number;
		fielded: boolean;
	};
</script>

<script lang="ts">
	import * as Character from '../../Character';
	import * as Drawer from '$lib/components/ui/drawer';
	import { default as CharacterDrawer } from '../../Character/Drawer/Drawer.svelte';
	import asset from '$lib/assets/Label_Ribbon00_Color_Purple.png';
	import { MessageCircleQuestion } from 'lucide-svelte';

	export let fielded: Hero[];
	export let benched: Hero[];

	export let onBenched: (id: string) => void;
	export let onFielded: (id: string) => void;
</script>

<div class="flex flex-col max-h-full overflow-hidden">
	<div class="px-2 py-4 border-b border-muted-foreground/70 h-fit">
		<div class="px-6">
			<div class="relative flex justify-center text-white banner" style="--ribbon: url({asset})">
				<div
					class="relative flex items-baseline justify-center w-4/5 mx-auto mt-2 text-xl font-semibold text-center"
				>
					Your Team
				</div>
			</div>
		</div>

		<div class="grid grid-cols-4 grid-rows-1 gap-3 mt-2">
			<!-- TODO: handle not having 4 heroes and empty state  -->
			{#each fielded as hero (hero.id)}
				<Drawer.Root>
					<Drawer.Trigger>
						<Character.Card {hero} />
					</Drawer.Trigger>
					<Drawer.Content>
						<CharacterDrawer {hero} action={onBenched}></CharacterDrawer>
					</Drawer.Content>
				</Drawer.Root>
			{/each}
			{#if fielded.length < 4}
				{@const missing = 4 - fielded.length}
				{#each new Array(missing).fill(null) as _, i}
					<div
						class="flex items-center justify-center border rounded-lg border-muted-foreground/70"
					>
						<MessageCircleQuestion class="w-8 h-8 text-muted-foreground" />
					</div>
				{/each}
			{/if}
		</div>
	</div>

	<div class="flex-grow px-2 pt-2 mt-6 overflow-y-auto">
		<div class="grid grid-cols-4 gap-6">
			{#each benched as hero (hero.id)}
				<Drawer.Root>
					<Drawer.Trigger>
						<Character.Card {hero} />
					</Drawer.Trigger>
					<Drawer.Content>
						<CharacterDrawer {hero} action={onFielded} disabled={fielded.length === 4}
						></CharacterDrawer>
					</Drawer.Content>
				</Drawer.Root>
			{/each}
		</div>
	</div>
</div>

<style lang="postcss">
	.banner {
		height: 60px;
		border-image: var(--ribbon);
		border-image-width: 0px 40px;
		border-image-slice: 0% 49% fill;
		transform: scale(90%);
	}
</style>
