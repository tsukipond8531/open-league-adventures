<script lang="ts">
	import { derived, writable } from 'svelte/store';
	import { Views } from 'ui';

	export let data;

	// const characters = data.characters;

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

	$: fielded = derived(charactersStore, ($charactersStore) =>
		$charactersStore.filter((character) => character.fielded)
	);
	$: benched = derived(charactersStore, ($charactersStore) =>
		$charactersStore.filter((character) => !character.fielded)
	);
	/*
	$: fielded = characters.filter((character) => character.fielded);
	$: benched = characters.filter((character) => !character.fielded);
*/
	// $: console.log(fielded, benched);
</script>

<!-- TODO: should be a header and a list. The list should be able to overflow and be scrolled upon -->
<Views.Team
	fielded={$fielded}
	benched={$benched}
	onBenched={charactersStore.bench}
	onFielded={charactersStore.field}
/>
