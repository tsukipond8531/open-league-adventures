import type { PageLoad } from './$types';
import { DB_CLIENT } from '$lib/client';

import { portraits } from 'shared';

function classNameToPortrait(className: string) {
	const name = className.toLowerCase().replaceAll(' ', '_');
	switch (name) {
		case 'ranger':
			return portraits['./Ranger.png'];
		case 'warrior':
			return portraits['./Warrior.png'];
		case 'black_mage':
			return portraits['./Black_mage.png'];

		default:
			return portraits['./Warrior.png'];
	}
}

export const load = (async ({ parent }) => {
	const { userID } = await parent();
/*
	const channel = DB_CLIENT.channel('supabase_realtime')
		.on(
			'postgres_changes',
			{
				event: '*',
				schema: 'public',
				table: 'playerteam',
				filter: `playerid=eq.${userID}`,
		  
			},
			(payload) => console.log(payload)
		)
		.subscribe();

*/
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
				image: classNameToPortrait(pawn.class!),
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
