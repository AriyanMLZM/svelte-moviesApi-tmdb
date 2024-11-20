<script lang="ts">
	import { tvs } from '../constants/index.svelte'
	import { List, Error, Trending } from '../lib/index.svelte'
	import { Loader } from '../lib/index.svelte'

	document.title = 'Movotopia | Tv'

	const getData = async () => {
		let data = []
		for (let item of tvs) {
			const resTmdb = await fetch(
				`https://api.themoviedb.org/3/tv/${item}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
			)
			const {
				original_name: title,
				first_air_date: date,
				poster_path: poster,
				vote_average: vote,
			} = await resTmdb.json()

			data.push({
				id: item,
				title,
				date: date.split('-')[0],
				poster,
				rate: vote.toFixed(1),
			})
		}
		return data
	}
</script>

{#await getData()}
	<Loader />
{:then tvsData}
	<Trending type="tv" />
	<List data={tvsData} type={'tv'} />
{:catch error}
	<Error msg={error.message} />
{/await}
