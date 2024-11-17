import { Config } from 'tailwindcss'
const config: Config = {
	content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FE5702',
			},
		},
	},
	plugins: [],
}

export default config
