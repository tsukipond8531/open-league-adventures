import { DB_CLIENT } from '$lib/client';
import type { PageLoad } from './$types';

export const load = (async ({ parent }) => {
	const { userID } = await parent();
	const { count } = await DB_CLIENT.from('referral')
		.select('*', { count: 'exact' })
		.eq('referrer_id', userID)
		.single();

    const {data: referrer} = await DB_CLIENT.from('referral').select('referrer_id').eq("referred_id", userID).single();

	return {
        referral: {
            count: count || 0,
            referrer: referrer?.referrer_id || null
        }
    };
}) satisfies PageLoad;
