<script lang="ts">
	import { link } from 'svelte-spa-router'
	import type { ISeason } from '../types/index.svelte'
	import { Image } from './index.svelte'
	export let seasons: ISeason[]
	export let id: string
</script>

<section
	class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-[1.2rem] mt-[60px]"
>
	{#each seasons as season}
		<a
			href="/season/{id}/{season.season_number}"
			use:link
			class="flex-center flex-col hover:bg-white/30 active:bg-white/30 rounded-[20px]"
		>
			<div class="w-full min-h-[120px] rounded-[20px] overflow-hidden">
				<Image
					src={import.meta.env.VITE_TMDB_IMAGE_URL_POSTER + season.poster_path}
					alt={season.name}
				/>
			</div>
			<div class="text-white p-[20px] text-center">
				<h2 class="text-[0.9rem]">
					{season.name}
				</h2>
				<div class="flex justify-between gap-[40px] mt-[10px]">
					<h3 class="text-[0.8rem]">{season.vote_average}</h3>
					{#if season.air_date}
						<h3 class="text-[0.8rem]">{season.air_date.split('-')[0]}</h3>
					{/if}
				</div>
				<h2 class="text-[0.8rem] mt-[10px]">
					<span class="text-primary">Episodes</span>
					{season.episode_count}
				</h2>
			</div>
		</a>
	{/each}
</section>
