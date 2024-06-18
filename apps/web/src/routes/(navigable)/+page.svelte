<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import News from '$lib/assets/Itemicon_Megaphone.png';
	import Friends from '$lib/assets/Itemicon_Friends.png';
	import Raid from '$lib/assets/Itemicon_Flag_1_Clan.png';
	import PvP from '$lib/assets/Itemicon_Flag_Pirate.png';
	import { Views } from 'ui';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Copy } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	export let data;

	let referalCode = '';

	$: console.dir(data.team)

	let clicked = false;
	// TODO: if already referred, we're not showing the referral code input
	async function submitReferral() {}
</script>

<div class="absolute z-10 flex items-center space-x-3 right-2 top-2">
	<Dialog.Root>
		<Dialog.Trigger class="relative p-1 border rounded-full">
			<div
				class="w-8 h-8 bg-center bg-no-repeat bg-contain"
				style="background-image: url({Friends});"
			></div>
			<div
				class="absolute -bottom-2 left-[50%] translate-x-[-50%] text-center text-xs font-semibold"
			>
				Friends
			</div>
		</Dialog.Trigger>
		<Dialog.Content class="">
			<Dialog.Header>
				<Dialog.Title>Friends</Dialog.Title>
				<Dialog.Description>Invite your friends, get rewarded</Dialog.Description>
			</Dialog.Header>
			<div class="h-[400px] flex flex-col justify-evenly overflow-y-auto rounded-md border p-4">
				<div class="grid items-center w-full max-w-sm gap-2">
					<Label>Your referral code</Label>
					<div class="flex items-center px-4 py-2 border rounded-sm">
						<div class="flex-grow">{data.userID}</div>
						<button
							class="text-muted-foreground hover:text-primary-foreground disabled:hover:text-muted-foreground"
							disabled={clicked}
							on:click={() => {
								clicked = true;
								navigator.clipboard.writeText(data.userID);
								setTimeout(() => {
									clicked = false;
								}, 1000);
							}}
						>
							{#if clicked}
								<span class="text-xs text-right"> Copied </span>
							{:else}
								<Copy size="16"></Copy>
							{/if}
						</button>
					</div>
					<p class="text-sm text-muted-foreground">You've referred {data.referral.count} users</p>
				</div>
				<div class="grid items-center w-full max-w-sm gap-2">
					{#if data.referral.referrer}
						<Label>Referrer</Label>
						<div class="text-muted-foreground">{data.referral.referrer}</div>
					{:else}
						<div class="grid items-center w-full max-w-sm gap-2">
							<Label>Referral Code</Label>
							<Input placeholder="Enter referral code" bind:value={referalCode} />
							<p class="text-sm text-muted-foreground">Enter a referral code.</p>
							<Button
								on:click={() => submitReferral()}
								variant="secondary"
							>
								Submit</Button
							>
						</div>
					{/if}
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Root>
	<Dialog.Root>
		<Dialog.Trigger class="relative p-1 border rounded-full">
			<div
				class="w-8 h-8 bg-center bg-no-repeat bg-contain"
				style="background-image: url({News});"
			></div>
			<div
				class="absolute -bottom-2 left-[50%] translate-x-[-50%] text-center text-xs font-semibold"
			>
				News
			</div>
		</Dialog.Trigger>
		<Dialog.Content class="">
			<Dialog.Header>
				<Dialog.Title>News</Dialog.Title>
			</Dialog.Header>
			<div class="h-[400px] overflow-y-auto rounded-md border p-4">
				<h2 class="text-lg font-medium">Welcome to our testnet version of Eternal Quest!</h2>
				<div class="mt-4">
					<!-- TODO: review content, we'd like to feature the hackathon and our socials on here -->
					We are currently in the process of developing the game and would love to hear your feedback.<br
					/>
					Please feel free to reach out to us on our telegram channel.
				</div>
			</div>
		</Dialog.Content>
	</Dialog.Root>
</div>

<Views.Idle models={data.team.map((char) => char.class)} />

<div class="absolute z-10 flex flex-col items-center space-y-3 bottom-3 right-2">
	<Dialog.Root>
		<Dialog.Trigger
			class="relative p-2 border rounded-full border-muted-foreground/60 bg-muted/20"
			disabled
		>
			<div
				class="w-8 h-8 bg-center bg-no-repeat bg-contain locked"
				style="background-image: url({PvP});"
			></div>
			<div
				class="absolute -bottom-2 left-[50%] translate-x-[-50%] text-center text-xs font-semibold"
			>
				PvP
			</div>
		</Dialog.Trigger>
		<Dialog.Content class="">
			<Dialog.Header>
				<Dialog.Title>Pvp</Dialog.Title>
				<Dialog.Description>Fight other players</Dialog.Description>
			</Dialog.Header>
			<div class="h-[400px] overflow-y-auto rounded-md border p-4">Coming soon</div>
		</Dialog.Content>
	</Dialog.Root>
	<Dialog.Root>
		<Dialog.Trigger
			class="relative p-2 border rounded-full border-muted-foreground/60 bg-muted/20"
			disabled
		>
			<div
				class="w-8 h-8 bg-center bg-no-repeat bg-contain locked"
				style="background-image: url({Raid});"
			></div>
			<div
				class="absolute -bottom-2 left-[50%] translate-x-[-50%] text-center text-xs font-semibold"
			>
				Raids
			</div>
		</Dialog.Trigger>
		<Dialog.Content class="">
			<Dialog.Header>
				<Dialog.Title>Raids</Dialog.Title>
				<Dialog.Description>Raid with your friends</Dialog.Description>
			</Dialog.Header>
			<div class="h-[400px] overflow-y-auto rounded-md border p-4">Coming soon</div>
		</Dialog.Content>
	</Dialog.Root>
</div>

<style>
	:disabled {
		@apply grayscale;
	}
</style>
