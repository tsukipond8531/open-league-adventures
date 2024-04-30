import { createClient } from '@supabase/supabase-js';
import { type Database } from '$lib/types/supabase';
import {  PUBLIC_SUPABASE_URL } from '$env/static/public';
import { SUPABASE_KEY } from '$env/static/private';

export const PRIVATE_DB_CLIENT = createClient<Database>(PUBLIC_SUPABASE_URL, SUPABASE_KEY);
