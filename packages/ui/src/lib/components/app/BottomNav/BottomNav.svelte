<script lang="ts">
	import { ShoppingBasket, Sword } from 'lucide-svelte';
	import Shop from '$lib/assets/Itemicon_Home_Shop_0.png';
	export let links = [
		{ name: 'Team', href: '/team', icon: Shop },
		{ name: 'Adventure', href: '/', icon: Shop },
		{ name: 'Shop', href: '/shop', icon: Shop }
	];
	export let active = 'Team';
</script>

<div class="flex items-center pt-2 border-t font-fredoka justify-evenly">
	{#each links as { name, href, icon }}
		<a class="flex flex-col items-center" {href} data-current={name === active}>
			<!-- 

				<svelte:component this={icon} size="24" />
			-->
			<img src={icon} alt="" width="46" />
			<div class="-mt-1 text-sm font-semibold text-shadow">
				{name}
			</div>
		</a>
	{/each}
</div>

<style>
	a:hover {
		color: hsl(var(--primary));
	}

	a[data-current='true'] {
		color: hsl(var(--primary));
	}

	.text-shadow {
		/* text-shadow: black 0px 1px; */
		-webkit-text-stroke: 0.4px black;
		text-stroke: 0.4px black;
	}
</style>
