import { createClient } from '@supabase/supabase-js';
import { type Database } from '$lib/types/supabase';
import { PUBLIC_SUPABASE_ANON_KEY,  PUBLIC_SUPABASE_URL } from '$env/static/public';

export const DB_CLIENT = createClient<Database>(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY);
