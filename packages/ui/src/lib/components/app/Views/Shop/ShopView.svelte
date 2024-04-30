<script lang="ts">
	import asset from '$lib/assets/Label_Ribbon00_Color_Blue.png';
	import { MessageCircleQuestion } from 'lucide-svelte';
</script>

<div>
	<div class="relative flex justify-center text-white banner" style="--ribbon: url({asset})">
		<div
			class="relative flex items-baseline justify-center w-4/5 mx-auto mt-2 font-semibold text-center"
		>
			<div class="absolute left-0 translate-y-[25%]">
				<MessageCircleQuestion size="18"></MessageCircleQuestion>
			</div>
			Header
		</div>
	</div>

	<slot />
</div>

<style lang="postcss">
	.banner {
		height: 60px;
		border-image: var(--ribbon);
		border-image-width: 0px 60px;
		border-image-slice: 0% 49% fill;
	}
</style>
