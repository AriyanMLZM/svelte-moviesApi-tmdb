import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { VitePWA } from 'vite-plugin-pwa'

const vercelConfig = defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			selfDestroying: true,
			registerType: 'autoUpdate',
			manifest: {
				short_name: 'Movotopia',
				name: 'Movotopia',
				scope: '/',
				start_url: '/',
				display: 'standalone',
				background_color: '#222222',
				description: 'Search and list the Movies and Tv-shows.',
				theme_color: '#FE5702',
				icons: [
					{
						src: '/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/pwa-maskable-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: '/pwa-maskable-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
})

const ghPagesConfig = defineConfig({
	plugins: [
		svelte(),
		VitePWA({
			selfDestroying: true,
			registerType: 'autoUpdate',
			manifest: {
				short_name: 'Movotopia',
				name: 'Movotopia',
				scope: '/svelte-moviesApi-tmdb',
				start_url: '/svelte-moviesApi-tmdb',
				display: 'standalone',
				background_color: '#222222',
				description: 'Search and list the Movies and Tv-shows.',
				theme_color: '#FE5702',
				icons: [
					{
						src: '/svelte-moviesApi-tmdb/pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/svelte-moviesApi-tmdb/pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any',
					},
					{
						src: '/svelte-moviesApi-tmdb/pwa-maskable-192x192.png',
						sizes: '192x192',
						type: 'image/png',
						purpose: 'maskable',
					},
					{
						src: '/svelte-moviesApi-tmdb/pwa-maskable-512x512.png',
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

export default vercelConfig
