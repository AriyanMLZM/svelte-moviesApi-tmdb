<script lang="ts">
	import { List, Error, Loader, BackButton } from '../lib/index.svelte'
	document.title = 'Movotopia | Search'

	let value: string = ''

	$: searchingMovies = search(value, 'movie')
	$: searchingTvs = search(value, 'tv')

	const search = async (phrase: string, type: string) => {
		if (phrase === '') {
			return []
		}
		const resTmdb = await fetch(
			`https://api.themoviedb.org/3/search/${type}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${phrase}`
		)
		const { results } = await resTmdb.json()
		if (results.length === 0) return []
		if (results.length > 10) results.length = 10
		const modifiedResults = results.map((item: any) => {
			return {
				id: item.id,
				title: item.title || item.name,
				date: item.release_date
					? item.release_date.split('-')[0]
					: item.first_air_date
						? item.first_air_date.split('-')[0]
						: '',
				poster: item.poster_path,
				rate: item.vote_average.toFixed(1),
			}
		})
		return { modifiedResults, type }
	}
</script>

<div class="px-[20px]">
	<BackButton />
</div>
<section class="w-full h-[80px] flex-center">
	<input
		autofocus
		class="bg-[#222] px-[20px] py-[5px] text-[0.9rem] w-[15rem] outline-none text-primary rounded-[20px] border-2 border-[#888]"
		type="text"
		placeholder="Search..."
		bind:value
	/>
</section>
{#await searchingMovies}
	<Loader />
{:then result: any}
	<List data={result.modifiedResults} type={result.type} />
{:catch error}
	<Error msg={error.message} />
{/await}
{#await searchingTvs}
	<Loader />
{:then result: any}
	<List data={result.modifiedResults} type={result.type} />
{:catch error}
	<Error msg={error.message} />
{/await}
