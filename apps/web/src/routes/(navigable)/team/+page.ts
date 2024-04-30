import type { PageLoad } from './$types';
import Frog from '$lib/assets/Itemicon_Globe.png';
import { DB_CLIENT } from '$lib/client';

export const load = (async ({ parent }) => {
	const { userID } = await parent();
	const { data: playerPawns } = await DB_CLIENT.from('playerpawns')
		.select('*')
		.eq('playerid', userID);
	const characters_new = playerPawns?.map((pawn) => {
		return {
			id: pawn.id,
			level: pawn.lvl,
			// TODO: implement rarity on the character itself
			rarity: 3,
			image: Frog,
			class: pawn.class,
			health: pawn.hp,
			attack: pawn.attack,
			defense: pawn.defense,
			speed: pawn.speed,
			fielded: pawn.isinteam,
		}
	}) || [];

	// TODO: fetch characters from DB
	const characters = new Array(20).fill(0).map((_, i) => {
		return {
			id: crypto.randomUUID(),
			name: 'Frog',
			level: i + 1,
			rarity: Math.ceil(5 * Math.random()),
			image: Frog,
			class: 'Warrior',
			health: 100,
			attack: 100,
			defense: 100,
			speed: 100,
			fielded: i < 4
		};
	});
	return {
		characters: characters_new
	};
}) satisfies PageLoad;
