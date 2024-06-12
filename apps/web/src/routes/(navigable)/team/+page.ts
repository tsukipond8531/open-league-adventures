import type { PageLoad } from './$types';
import { DB_CLIENT } from '$lib/client';

import { portraits } from 'shared';

export const load = (async ({ parent }) => {
	const { userID } = await parent();
	const { data: playerPawns } = await DB_CLIENT.from('playerpawns')
		.select('*')
		.eq('playerid', userID);


	// TODO: handle class and portraits

	const characters =
		playerPawns?.map((pawn) => {
			return {
				id: pawn.id,
				level: pawn.lvl,
				// TODO: implement rarity on the character itself
				rarity: 3,
				image: portraits['./Black_mage.png'],
				class: pawn.class,
				health: pawn.hp,
				attack: pawn.attack,
				defense: pawn.defense,
				speed: pawn.speed,
				fielded: pawn.isinteam
			};
		}) || [];

	return {
		characters: characters
	};
}) satisfies PageLoad;
