<script lang="ts">
	import { fly } from 'svelte/transition'
	import type { IEpisode } from '../types/index.svelte'

	export let episodes: IEpisode[]
</script>

<section
	in:fly={{ y: 200, duration: 1000 }}
	class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[20px]"
>
	{#each episodes as episode}
		<div class="flex justify-center">
			<div class="flex flex-col w-[450px] gap-[20px] p-[20px]">
				<div
					class="w-full h-[250px] bg-white/20 text-white text-[0.8rem] rounded-[20px]"
				>
					{#if episode.still_path}
						<img
							src={import.meta.env.VITE_TMDB_IMAGE_URL_STILL +
								episode.still_path}
							alt={episode.name}
							class="w-full h-full object-cover rounded-[20px]"
						/>
					{/if}
				</div>
				<div class="text-white flex flex-col gap-[10px] w-full">
					<h2 class="text-[0.95rem]">{episode.name}</h2>
					<h3 class="text-[0.8rem]">Episode {episode.episode_number}</h3>
					<h3 class="text-[0.8rem]">{episode.vote_average.toFixed(1)}</h3>
					<p class="text-[0.8rem] mt-[10px] text-justify">{episode.overview}</p>
				</div>
			</div>
		</div>
	{/each}
</section>
