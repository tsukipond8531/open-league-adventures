import type { Preview } from '@storybook/svelte';
import { themes } from '@storybook/theming';

import '../src/app.pcss';
const preview: Preview = {
	parameters: {
		backgrounds: {
			default: 'dark'
		},
		docs: {
			theme: themes.dark
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	}
};

export default preview;
