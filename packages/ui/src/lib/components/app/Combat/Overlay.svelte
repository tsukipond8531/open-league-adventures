<script lang="ts" context="module">
	export type Outcome = {
		experience: number;
		gold: number;
		outcome: 'victory' | 'defeat';
	};
</script>

<script lang="ts">
	import { scale } from 'svelte/transition';

	export let outcome: Outcome | null = null;

	import VictoryRibbon from '$lib/assets/ImageGroup_Victory_Ribbon.png';
	import DefeatRibbon from '$lib/assets/ImageGroup_Defeat_Ribbon.png';
	import { expoOut } from 'svelte/easing';
	import Button from '$lib/components/ui/button/button.svelte';

	let transitionIsDone = false;
</script>

{#if outcome}
	{@const banner = outcome.outcome === 'victory' ? VictoryRibbon : DefeatRibbon}
	<div
		class="absolute inset-0 z-50 flex flex-col items-center justify-center border-blue bg-background/80 backdrop-blur-sm"
		transition:scale={{ easing: expoOut, duration: 750 }}
		on:introend={() => {
			transitionIsDone = true;
		}}
	>
		<div
			class="w-56 text-white banner h-14"
			data-outcome={outcome.outcome}
			style="--ribbon: url({banner})"
		>
			<div class="relative flex items-center justify-center w-4/5 mx-auto mt-2 text-center">
				<div class="text-xl font-bold tracking-wider uppercase font-fredoka">
					{outcome.outcome}
				</div>
			</div>
		</div>
		{#if transitionIsDone}
			<div class="mt-4 text-lg" transition:scale={{ easing: expoOut, duration: 250 }}>
				<div class="text-center text-white">
					<div>Experience: {outcome.experience}</div>
					<div>Gold: {outcome.gold}</div>
				</div>
				<Button href="/" variant="ghost" class="mt-4 animate-pulse">Click to close</Button>
			</div>
		{/if}
	</div>
{/if}

<style lang="postcss">
	.banner {
		border-image: var(--ribbon);
	}

	[data-outcome='defeat'] {
		border-image-width: 0px 40px;
		border-image-slice: 0% 20% fill;
	}

	[data-outcome='victory'] {
		border-image-width: 0px 50px;
		border-image-slice: 0% 49% fill;
	}
</style>
