<script lang="ts">
	import CupIcon from '$lib/assets/Itemicon_Trophy_Gold.png';

	export let value: {
		id: string;
		name: string;
		power: number;
		rank: number;
		description?: string;
	};

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
</script>

<div class="bg-card flex h-[72px] items-stretch space-x-4 overflow-hidden rounded-xl border shadow">
	<div class="flex flex-col items-center justify-center bg-muted aspect-square rounded-tr-2xl">
		<div class="text-xl font-semibold text-primary">
			{value.rank <= 0 ? '100+' : value.rank}
		</div>
	</div>
	<div class="flex flex-col justify-center flex-grow text-left">
		<div class="text-lg font-semibold capitalize">{value.name}</div>
		{#if value.description}
			<div class="text-sm text-muted-foreground">{value.description}</div>
		{/if}
	</div>
	<div class="flex items-center pr-4 space-x-3">
		<div>
			{powerDisplay(value.power)}
		</div>
		<img src={CupIcon} alt="Trophy icon" width="36" />
	</div>
</div>
