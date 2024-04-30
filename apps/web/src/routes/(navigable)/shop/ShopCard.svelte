<script lang="ts">
	import Ton from '$lib/assets/logos/ton.svelte';
	import Separator from '$lib/components/ui/separator/separator.svelte';

	export let content: {
		title: string;
		price: number;
		image: string;
		description: string;
	};
</script>

<div class="flex flex-col py-3 space-y-3 border rounded aspect-square">
	<div class="text-sm font-bold text-center">{content.title}</div>
	<div class="flex flex-col items-center justify-center flex-grow px-4 md:px-8">
		<img
			src={content.image}
			alt={content.title}
			class="w-full p-4 border rounded bg-secondary aspect-square"
		/>
		<div>{content.description}</div>
	</div>
	<Separator></Separator>
	<div class="flex items-center justify-center">
		<div class="w-6 mr-1">
			<Ton></Ton>
		</div>
		{content.price} TON
	</div>
</div>
