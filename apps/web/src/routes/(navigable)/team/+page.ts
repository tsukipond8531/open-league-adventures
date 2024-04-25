import type { PageLoad } from './$types';
import Frog from '$lib/assets/Itemicon_Globe.png';

export const load = (async () => {
	// TODO: fetch characters from DB
	const characters = new Array(20).fill(0).map((_, i) => {
		return {
			id: crypto.randomUUID(),
			name: 'Frog',
			level: i+1,
			rarity: Math.ceil(5 * Math.random()),
			image: Frog,
			available: true,
			class: 'Warrior',
			health: 100,
			attack: 100,
			defense: 100,
			speed: 100,
			fielded: i < 4
		};
	});
	return {
		characters
	};
}) satisfies PageLoad;
