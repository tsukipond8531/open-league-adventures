import { DB_CLIENT } from '$lib/client';
import type { LayoutLoad } from './$types';
import { init } from '@tma.js/sdk';
export const ssr = false;

export const load = (async ({ url }) => {
	// TODO: get the user ID in another way. We 'should' be getting it from the opening URL?
	let userID = 'Bogdanoff';

	try {
		const { initData } = init();
		console.dir(initData);
		userID = initData!.user!.id;
	} catch (error) {
		console.log('Error getting user ID');
	}

	const { data: playerPower } = await DB_CLIENT.from('playerpower')
		.select('*')
		.eq('playerid', userID)
		.single();

	return {
		userID: userID,
		playerPower: playerPower?.playerpower ?? 0
	};
}) satisfies LayoutLoad;
