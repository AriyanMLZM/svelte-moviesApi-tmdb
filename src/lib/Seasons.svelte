<script lang="ts">
	import { link } from 'svelte-spa-router'
	import type { ISeason } from '../types/index.svelte'
	export let seasons: ISeason[]
	export let id: string
</script>

<section
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[60px]"
>
	{#each seasons as season}
		<a
			href="/season/{id}/{season.season_number}"
			use:link
			class="flex-center flex-col hover:bg-white/30 active:bg-white/30 rounded-[20px] p-[20px]"
		>
			<div class="w-[300px] bg-gray-500 rounded-[20px]">
				{#if season.poster_path}
					<img
						src={import.meta.env.VITE_TMDB_IMAGE_URL + season.poster_path}
						alt={season.name}
						class="w-full h-full object-cover rounded-[20px]"
					/>
				{/if}
			</div>
			<div class="text-white p-[20px] text-center">
				<h2 class="text-[0.9rem]">
					{season.name}
				</h2>
				<div class="flex justify-between gap-[40px] mt-[10px]">
					<h3 class="text-[0.8rem]">{season.vote_average}</h3>
					<h3 class="text-[0.8rem]">{season.air_date.split('-')[0]}</h3>
				</div>
				<h2 class="text-[0.8rem] mt-[10px]">
					<span class="text-primary">Episodes</span>
					{season.episode_count}
				</h2>
			</div>
		</a>
	{/each}
</section>
