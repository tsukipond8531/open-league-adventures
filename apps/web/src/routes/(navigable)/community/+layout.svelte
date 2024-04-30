<script lang="ts">
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';

	$: isClan = $page.url.href.includes('clan');
</script>

<div class="grid grid-cols-2 grid-rows-1 gap-2 px-2 mt-2 mb-4">
	<Button href="/community" class="rounded-sm" variant={!isClan ? 'default' : 'outline'}
		>Leaderboard</Button
	>
	<Button href="/community/clan" variant={isClan ? 'default' : 'outline'}>Clan</Button>
</div>

<slot />

<style>
</style>
