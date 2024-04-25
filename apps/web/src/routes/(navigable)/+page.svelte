<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import News from '$lib/assets/Itemicon_Megaphone.png';
	import Friends from '$lib/assets/Itemicon_Friends.png';
	import Raid from '$lib/assets/Itemicon_Flag_1_Clan.png';
	import PvP from "$lib/assets/Itemicon_Flag_Pirate.png";
	import { Views } from 'ui';
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

<Views.Idle />

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
