<script lang="ts">
	import BottomNav from '../../BottomNav/BottomNav.svelte';
	import Header from '../../Header/Header.svelte';

	let active = 'Team';
</script>

<div class="flex flex-col flex-grow h-screen">
	<slot name="header" />
	<div class="relative flex-grow overflow-hidden">
		<slot />
	</div>

	<slot name="bottom">
		<BottomNav {active} />
	</slot>
</div>
