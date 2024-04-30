import { DB_CLIENT } from '$lib/client';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { userID } = await parent();

	const { data: players, error } = await DB_CLIENT.from('playerpower')
		.select('*')
		.order('playerpower', { ascending: false })
		.limit(100);

	console.dir(players);

	return {
		players: players ?? [],
		rank: (players?.findIndex((player) => player.playerid === userID) ?? -2) +1
	};
}) satisfies PageLoad;
