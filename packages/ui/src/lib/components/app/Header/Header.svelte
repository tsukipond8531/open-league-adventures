<script lang="ts">
	import CoinIcon from '$lib/assets/Coins/Itemicon_Coin_Gold_Star.png';
	import Power from '$lib/assets/Itemicon_Equipment_Weapon_Battle.png';
	import Energy from '$lib/assets/Itemicon_Energy_0_Yellow.png';

	export let powerLevel: number;
	export let currentEnergy: number;
	export let maxEnergy: number;
	export let coinBalance: number;
</script>

<div class="flex items-center justify-between px-2 py-2 text-sm border-b">
	<div class="flex items-center space-x-2">
		<img src={Power} alt="Power Level" class="h-7 w-7" />

		<div>
			{powerLevel}
		</div>
	</div>

	<div class="flex items-center space-x-3">
		<div class="flex w-[120px] items-center rounded-lg border px-1">
			<img src={Energy} width="24" alt="coin balance" class="mr-1" />
			<div class="flex-grow px-1 py-0.5 text-right">{currentEnergy}/{maxEnergy}</div>
		</div>

		<div class="flex w-[140px] items-center rounded-lg border">
			<img src={CoinIcon} width="24" alt="coin balance" class="mr-1" />
			<div class="flex-grow px-1 py-0.5 text-right">{coinBalance}</div>
			<a class="px-2 border-l" href="/shop">+</a>
		</div>
	</div>
</div>
