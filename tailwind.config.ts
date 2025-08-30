import { Config } from 'tailwindcss'
const config: Config = {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--accentColor)',
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [],
}

export default config
