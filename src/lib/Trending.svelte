<script lang="ts">
	import { link } from 'svelte-spa-router'
	import { fly } from 'svelte/transition'
	import { Error, Image, Loader } from '../lib/index.svelte'

	export let type: string

	const getData = async () => {
		const resTmdb = await fetch(
			`${import.meta.env.VITE_PROXY_API}https://api.themoviedb.org/3/trending/${type}/week?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
		)
		const { results } = await resTmdb.json()
		results.length = 12
		return results
	}
</script>

<h2 class="py-[20px] pt-[80px] text-[1.2rem] text-center font-bold text-white">
	Trending
</h2>
{#await getData()}
	<div class="h-[200px] w-full">
		<Loader />
	</div>
{:then trendings}
	<section
		in:fly={{ y: 100, duration: 800 }}
		class="grid grid-cols-3 md:grid-cols-6 gap-[20px] px-[20px] mb-[40px]"
	>
		{#each trendings as trend}
			<a
				href="/{type}/{trend.id}"
				use:link
				class="flex w-full flex-col gap-[10px] justify-between hover:bg-white/30 active:bg-white/30 hover:text-black text-white active:text-black rounded-[20px] pb-[10px]"
			>
				<div
					class="w-full min-h-[120px] rounded-t-[20px] rounded-b-[20px] hover:rounded-b-[0px] duration-[300ms] overflow-hidden"
				>
					<Image
						src={import.meta.env.VITE_TMDB_IMAGE_URL_POSTER + trend.poster_path}
						alt={trend.name || trend.title}
					/>
				</div>
				<h2
					class="text-[0.8rem] font-bold text-center overflow-hidden overflow-ellipsis h-[30px] text-nowrap px-[10px]"
				>
					{trend.name || trend.title}
				</h2>
			</a>
		{/each}
	</section>
{:catch error}
	<Error msg={error.message} />
{/await}
