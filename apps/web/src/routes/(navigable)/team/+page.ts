import type { PageLoad } from './$types';
import Frog from '$lib/assets/Itemicon_Globe.png';
import WarriorPortrait from '$lib/assets/portraits/Warrior.png';
import { DB_CLIENT } from '$lib/client';

export const load = (async ({ parent }) => {
	const { userID } = await parent();
	const { data: playerPawns } = await DB_CLIENT.from('playerpawns')
		.select('*')
		.eq('playerid', userID);

	const characters =
		playerPawns?.map((pawn) => {
			return {
				id: pawn.id,
				level: pawn.lvl,
				// TODO: implement rarity on the character itself
				rarity: 3,
				image: WarriorPortrait,
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
