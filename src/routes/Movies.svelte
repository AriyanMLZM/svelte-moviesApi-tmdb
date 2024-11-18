<script lang="ts">
	import movies from '../constants/moviedb.svele'
	import { List, Error } from '../lib/index.svelte'
	import { Loader } from '../lib/index.svelte'

	document.title = 'Movotopia | Movie'

	const getData = async () => {
		let data = []
		for (let item of movies) {
			const resTmdb = await fetch(
				`https://api.themoviedb.org/3/movie/${item}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
			)
			const {
				original_title: title,
				release_date: date,
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
{:then moviesData}
	<List data={moviesData} type={'movie'} />
{:catch error}
	<Error msg={error.message} />
{/await}
