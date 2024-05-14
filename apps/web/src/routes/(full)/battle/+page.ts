import { DB_CLIENT } from '$lib/client';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { userID } = await parent();

	const { data: characters } = await DB_CLIENT.from('playerpawns')
		.select('*')
		.eq('playerid', userID)
		.eq('isinteam', true);
	return { characters };
}) satisfies PageLoad;
