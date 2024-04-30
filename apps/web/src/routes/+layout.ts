import { DB_CLIENT } from '$lib/client';
import type { LayoutLoad } from './$types';

export const load = (async () => {
	// TODO: get the user ID in another way. We 'should' be getting it from the opening URL?
	const userID = 'Bogdanoff';

	const { data: playerPower } = await DB_CLIENT.from('playerpower')
		.select('*')
		.eq('playerid', userID)
		.single();
	console.dir(playerPower);

	return {
		userID: userID,
		playerPower: playerPower?.playerpower ?? 0
	};
}) satisfies LayoutLoad;
