<script lang="ts">
	import '../app.pcss';

	import { onMount } from 'svelte';
	import { TonConnectUI, type Account, CHAIN } from '@tonconnect/ui';
	import { page } from '$app/stores';
	import { USER_ACCOUNT } from '$lib/state';

	let tonConnectUI: TonConnectUI;

	let isTelegram = false;

	let account: Account | null = null;
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

		tonConnectUI = new TonConnectUI({
			manifestUrl: `${$page.url.origin}/tonconnect-manifest.json`,
			buttonRootId: 'ton-connect'
		});

		tonConnectUI.onStatusChange((status) => {
			console.log('status', status);
			if (status?.account) {
				$USER_ACCOUNT = status.account;
			} else {
				$USER_ACCOUNT = null;
			}
		});

		isTelegram = true;
		if ('Telegram' in window) {
			//console.dir(window.Telegram);
			window.Telegram.WebApp.enableClosingConfirmation();
		}

		/*
		//const response = await tonConnectUI.sendTransaction()
		const bocCell = TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(response.boc));
        
const hash = TonWeb.utils.bytesToBase64(await bocCell.hash());
*/
	});

	// TODO: implement elsewhere
	async function sendTx() {
		const response = await tonConnectUI.sendTransaction({
			network: CHAIN.TESTNET,
			from: '',
			messages: [],
			validUntil: Date.now() + 1000000
		});

		response.boc;

		const bocCell = TonWeb.boc.Cell.oneFromBoc(TonWeb.utils.base64ToBytes(response.boc));

		const hash = TonWeb.utils.bytesToBase64(await bocCell.hash());
	}
</script>

<div class="relative mx-auto h-screen max-w-[422px] border-x">
	<slot />
	<div
		class="{tonConnectUI !== null && $USER_ACCOUNT !== null
			? 'hidden'
			: ''} absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 backdrop-blur-sm"
	>
		<div class="text-sm text-muted-foreground">Connect to the testnet and start playing</div>
		<div id="ton-connect" class="mt-4"></div>
	</div>
</div>
