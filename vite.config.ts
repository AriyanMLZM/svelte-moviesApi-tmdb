import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			registerType: 'autoUpdate',
			manifest: {
				short_name: 'Movotopia',
				name: 'Movotopia',
				start_url: '/svelte-moviesApi-tmdb',
				display: 'standalone',
				background_color: '#222222',
				description: 'Search and list the Movies and Tv-shows.',
				theme_color: '#FE5702',
				icons: [
					{
						src: '/movotopia-pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/movotopia-pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/movotopia-pwa-maskable-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: '/movotopia-pwa-maskable-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
	base: '/svelte-moviesApi-tmdb/',
})
