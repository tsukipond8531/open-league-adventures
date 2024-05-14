<script lang="ts">
	import { OrbitControls } from '@threlte/extras';

	import { Canvas } from '@threlte/core';
	import { T } from '@threlte/core';
	import Knight from '$lib/assets/Models/Knight.svelte';
	import CombatView from '$lib/components/app/Views/Combat/CombatView.svelte';
</script>

<div class="relative max-w-sm border border-red-500 h-96">
	<div id="css-renderer-target" />

	<Canvas>
		<CombatView />
	</Canvas>
</div>
