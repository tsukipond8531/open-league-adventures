import { PRIVATE_DB_CLIENT } from '$lib/private/supabase';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	return new Response();
};

export const POST: RequestHandler = async ({ request }) => {
	const json = await request.json();

	const insertion = await PRIVATE_DB_CLIENT.from('referral')
		.insert({
			referred_id: '',
			referrer_id: ''
		})
		.select('*')
		.single();

	if (insertion.error) {
		error(500, { message: insertion.error.message });
	} else {
		return new Response();
	}
};
