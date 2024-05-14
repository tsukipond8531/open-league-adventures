<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Feather from '$lib/assets/itemicon_feather.png';
	import Sword from '$lib/assets/Itemicon_Equipment_Sword.png';
	import Star from '$lib/assets/Icon_RankIcon_Star01_l.png';
	import Health from '$lib/assets/Icon_ColorIcon_Life.png';

	export let hero: {
		id: string;
		name: string;
		level: number;
		rarity: number;
		image: string;
		available: boolean;
		class: string;
		health: number;
		attack: number;
		defense: number;
		speed: number;
		fielded: boolean;
	};

	const statsKeys = ['health', 'attack', 'defense', 'speed'];
	const stats = statsKeys.map((key) => ({ key, value: hero[key] as number }));

	const statToIcon = {
		health: Health,
		attack: Sword,
		defense: Feather,
		speed: Feather
	};

	export let action: (id: string) => void;
	export let disabled = false;
</script>

<div class=" mx-auto w-full max-w-[422px] p-4">
	<div class="flex items-center justify-between">
		<div>
			<div>
				Level <span class="text-xl font-semibold text-yellow-500">{hero.level}</span> - {hero.class}
			</div>
			<div>
				<div class="mt-2 flex items-center space-x-0.5">
					{#each new Array(5) as _, i}
						{@const isRare = hero.rarity > i}
						<img src={Star} alt="" class="h-6 w-6 {isRare ? '' : 'grayscale'} " />
					{/each}
				</div>
				<div></div>
			</div>
		</div>

		<Button on:click={() => action(hero.id)} {disabled}>{hero.fielded ? 'Remove' : 'Use'}</Button>
	</div>
	<div class="mt-6">
		<div class="text-xs font-medium uppercase">Stats</div>
		<div class="grid grid-cols-2 gap-4 mt-2">
			{#each stats as { key, value }}
				<div class="flex items-center px-4 py-2 space-x-3 border rounded-lg bg-muted">
					<div>
						<img src={statToIcon[key]} alt={key} class="w-6 h-6" />
					</div>
					<div class="font-semibold">
						<div class="text-xs uppercase text-muted-foreground">{key}</div>
						<div class="text-yellow-500">{value}</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
