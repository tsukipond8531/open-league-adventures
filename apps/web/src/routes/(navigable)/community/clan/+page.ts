import { DB_CLIENT } from '$lib/client';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { userID } = await parent();

	const { data: clans, error } = await DB_CLIENT.from('clanpowerlevel')
		.select('*, clan(*)')
		.order('clanpower', { ascending: false });

	const { data: clanID } = await DB_CLIENT.from('player')
		.select('clanid')
		.eq('id', userID)
		.single();

	let playerClan = null;
	if (clanID !== null && clanID.clanid !== null) {
		const { data } = await DB_CLIENT.from('clanpowerlevel')
			.select('*, clan(*)')
			.eq('clanid', clanID.clanid!)
			.single();
		playerClan = data;

		playerClan.rank = clans?.findIndex((clan) => clan.clanid === playerClan.clanid) + 1 - 1;
	}

	return { clans, playerClan };
}) satisfies PageLoad;
