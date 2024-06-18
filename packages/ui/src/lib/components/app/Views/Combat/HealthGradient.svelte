<script lang="ts">
	import type { Readable } from 'svelte/store';

	// NOTE: Passing by reference is required in order to work with the CSS2D renderer that is expected to consume this component
	export let healthPercentage: Readable<number>;
</script>

<div class="relative w-8 h-2 overflow-hidden border rounded bg-background border-muted-foreground">
	<div
		class="absolute inset-y-0 left-0 h-full transition-all duration-300 bg-red-500"
		style="width: {$healthPercentage}%;"
	></div>
</div>
