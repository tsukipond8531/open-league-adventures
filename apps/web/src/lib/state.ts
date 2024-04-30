import { browser } from '$app/environment';
import { type Account } from '@tonconnect/ui';
import { get, writable } from 'svelte/store';

export const USER_ACCOUNT = writable<Account | null>(null);

if (browser) {
	if (window) {
		globalThis.debug = () => {
			console.log(USER_ACCOUNT);
			console.log(get(USER_ACCOUNT));
		};
	}
}

USER_ACCOUNT.subscribe((value) => {
    console.log(`Account: ${JSON.stringify(value)}`)
    
});
