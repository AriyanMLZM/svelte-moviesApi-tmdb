<script lang="ts">
	import movies from '../constants/tmdb-ids.movies.json'
	import { List, Error } from '../lib/index.svelte'
	import { Loader, Trending } from '../lib/index.svelte'
	import type { IApiMovie } from '../types/index.svelte'

	document.title = 'Movotopia | Movie'

	const getData = async () => {
		let data = []
		for (let item of movies) {
			const resTmdb = await fetch(
				`https://api.themoviedb.org/3/movie/${item.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
			)
			const {
				original_title: title,
				release_date: date,
				poster_path: poster,
				vote_average: vote,
			} = (await resTmdb.json()) as IApiMovie

			data.push({
				id: item.id,
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
	<Trending type="movie" />
	<List data={moviesData} type={'movie'} />
{:catch error}
	<Error msg={error.message} />
{/await}
