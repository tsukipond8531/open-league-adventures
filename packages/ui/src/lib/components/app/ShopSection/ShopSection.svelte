<script lang="ts" context="module">
	export enum ShopSectionType {
		Event,
		Basic,
		Bundle
	}
</script>

<script lang="ts">
	import blue from '$lib/assets/Label_Ribbon00_Color_Blue.png';
	import red from '$lib/assets/Label_Ribbon00_Color_Red.png';
	import purple from '$lib/assets/Label_Ribbon00_Color_Purple.png';

	import { MessageCircleQuestion } from 'lucide-svelte';

	export let sectionType: ShopSectionType = ShopSectionType.Basic;

	$: banner = (() => {
		switch (sectionType) {
			case ShopSectionType.Event:
				return red;
			case ShopSectionType.Basic:
				return blue;
			case ShopSectionType.Bundle:
				return purple;
		}
	})();

	export let header: string;
</script>

<div>
	<div class="relative flex justify-center mx-4 text-white banner" style="--ribbon: url({banner})">
		<div class="relative flex items-baseline justify-center w-4/5 mx-auto mt-2 text-center">
			<div class="absolute left-0 translate-y-[25%]">
				<MessageCircleQuestion size="18"></MessageCircleQuestion>
			</div>
			<div class="text-xl font-semibold tracking-widest font-fredoka">
				{header}
			</div>
		</div>
	</div>

	<div class="px-4 mt-4">
		<slot />
	</div>
</div>

<style lang="postcss">
	.banner {
		height: 60px;
		border-image: var(--ribbon);
		border-image-width: 0px 60px;
		border-image-slice: 0% 49% fill;
	}
</style>
