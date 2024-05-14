import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.png', '**/*.glb'],
	server: {
		fs: {
			allow: ['..']
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		includeSource: ['src/**/*.{js,ts}']
	},
	define: {
		'import.meta.vitest': 'undefined'
	},
	ssr: {
		noExternal: ['three']
	}
});
