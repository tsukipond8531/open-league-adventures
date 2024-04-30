<script lang="ts">
	import { derived, writable } from 'svelte/store';
	import { Views } from 'ui';

	export let data;

	const charactersStore = (() => {
		const { subscribe, set, update } = writable(data.characters);

		return {
			subscribe,
			field: (id: string) =>
				update((characters) =>
					characters.map((character) =>
						character.id === id ? { ...character, fielded: true } : character
					)
				),
			bench: (id: string) =>
				update((characters) =>
					characters.map((character) =>
						character.id === id ? { ...character, fielded: false } : character
					)
				)
		};
	})();

	charactersStore.subscribe((value) => {
		// TODO: notify database
	});

	$: fielded = derived(charactersStore, ($charactersStore) =>
		$charactersStore.filter((character) => character.fielded)
	);
	$: benched = derived(charactersStore, ($charactersStore) =>
		$charactersStore.filter((character) => !character.fielded)
	);
</script>

<Views.Team
	fielded={$fielded}
	benched={$benched}
	onBenched={charactersStore.bench}
	onFielded={charactersStore.field}
/>
