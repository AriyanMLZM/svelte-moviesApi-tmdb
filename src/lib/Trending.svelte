<script lang="ts">
	import { link } from 'svelte-spa-router'
	import { Error, Loader } from '../lib/index.svelte'

	export let type: string

	const getData = async () => {
		const resTmdb = await fetch(
			`https://api.themoviedb.org/3/trending/${type}/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
		)
		const { results } = await resTmdb.json()
		results.length = 6
		return results
	}
</script>

<h2 class="mt-[50px] py-[20px] text-[1.2rem] text-center font-bold text-white">
	Trending
</h2>
{#await getData()}
	<Loader />
{:then trendings}
	<section
		class="grid grid-cols-3 md:grid-cols-6 gap-[20px] px-[20px] mb-[40px]"
	>
		{#each trendings as trend}
			<a href="/{type}/{trend.id}" use:link class="flex justify-center">
				<div class="flex flex-col gap-[10px]">
					<div class="w-full bg-gray-500 rounded-[20px]">
						{#if trend.poster_path}
							<img
								src={import.meta.env.VITE_TMDB_IMAGE_URL + trend.poster_path}
								alt={trend.name || trend.title}
								class="w-full h-full object-cover rounded-[20px]"
							/>
						{/if}
					</div>
					<h2 class="text-[1rem] font-bold text-white text-center">
						{trend.name || trend.title}
					</h2>
				</div>
			</a>
		{/each}
	</section>
{:catch error}
	<Error msg={error.message} />
{/await}
