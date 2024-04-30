<script lang="ts">
	import { AxeIcon } from 'lucide-svelte';

	export let hero: {
		name: string;
		level: number;
		rarity: number;
		image: string;
		available: boolean;
		class: string;
	};
</script>

<div
	class="hero-card relative h-[140px] w-full overflow-hidden rounded rounded-tl-3xl border bg-cover bg-center bg-no-repeat"
	data-rarity={hero.rarity}
	style="background-image: url({hero.image});"
>
	<div
		class="absolute top-0 left-0 flex flex-col items-center justify-center text-white bg-green-500 rounded-full h-7 w-7"
	>
		<AxeIcon size="20"></AxeIcon>
	</div>
	<div
		class="absolute bottom-0 w-full px-1 text-sm font-semibold text-center hero-gradient text-muted-foreground"
	>
		LVL {hero.level}
	</div>
</div>

<style>
	.hero-card {
		@apply border;
		border-color: var(--rarity-color);
	}

	.hero-gradient {
		/* background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, var(--rarity-color) 100%); */
		@apply bg-black/60;
	}
</style>
