<script lang="ts">
	import { onMount } from 'svelte';
	import { TonConnectUI } from '@tonconnect/ui';
	import { dev } from '$app/environment';
	import { BottomNav, BaseLayout, Header } from 'ui';
	import Community from '$lib/assets/Itemicon_Flag_1_Clan.png';
	import Friends from '$lib/assets/Itemicon_Friends.png';
	import Shop from '$lib/assets/Itemicon_Home_Shop_0.png';
	import Adventure from '$lib/assets/Icon_ColorIcon_Map01.png';

	let tonConnectUI: TonConnectUI;

	let isTelegram = false;
	onMount(async () => {
		document.addEventListener(
			'touchmove',
			(e) => {
				e.preventDefault();
			},
			true
		);

		/*
		if (dev) {
			// import eruda from 'eruda';
			const eruda = await import('eruda');
			eruda.default.init();
		}*/
		/*
		tonConnectUI = new TonConnectUI({
			manifestUrl: `${$page.url.origin}/tonconnect-manifest.json`,
			buttonRootId: 'ton-connect'
		});*/

		isTelegram = true;
		if ('Telegram' in window) {
			console.dir(window.Telegram);
			window.Telegram.WebApp.enableClosingConfirmation();
		}
		// console.log($page.url)

		/*
		//const response = await tonConnectUI.sendTransaction()
		const bocCell = TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(response.boc));
        
const hash = TonWeb.utils.bytesToBase64(await bocCell.hash());
*/
	});

	export let links = [
		{ name: 'Team', href: '/team', icon: Friends },
		{ name: 'Adventure', href: '/', icon: Adventure },
		{ name: 'Community', href: '/community', icon: Community },
		{ name: 'Shop', href: '/shop', icon: Shop }
	];
	export let active = 'Team';

	let clientWidth;

	const currentEnergy = 100;
	const maxEnergy = 100;

	const coinBalance = 1000;
</script>

<div class="mx-auto max-w-[422px] border-x">
	<BaseLayout>
		<svelte:fragment slot="header">
			<Header powerLevel={10000} {currentEnergy} {maxEnergy} {coinBalance} />
		</svelte:fragment>

		<slot />

		<svelte:fragment slot="bottom">
			<BottomNav active={'from'} {links}></BottomNav>
		</svelte:fragment>
	</BaseLayout>
</div>
