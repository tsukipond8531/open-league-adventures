<script lang="ts">
	import { DB_CLIENT } from '$lib/client.js';
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

	charactersStore.subscribe(async (value) => {
		const { data: d } = await DB_CLIENT.from('playerteam')
			.update({ characterids: value.filter((c) => c.fielded === true).map((v) => v.id!) })
			.eq('playerid', data.userID)
			.select();
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
