<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import movies from '../constants/tmdb-ids.movies.json'
	import { List, Trending, PageSelector } from '../lib/index.svelte'

	import { saveScroll, restoreScroll } from '../utils/scrollManager'

	const packSize = 20
	const length = movies.length
	const pages = Math.ceil(length / packSize)
	const storedPage = Number(sessionStorage.getItem('pageMovies'))
	let index: number = storedPage < 1 || storedPage > pages ? 1 : storedPage

	onMount(() => {
		restoreScroll('movies')
	})

	const changeIndex = (action: string) => {
		switch (action) {
			case 'up':
				index = index === pages ? 1 : index + 1
				break
			case 'down':
				index = index === 1 ? pages : index - 1
				break
		}
		sessionStorage.setItem('pageMovies', index.toString())
	}

	$: paginatedItems = movies.slice((index - 1) * packSize, index * packSize)
</script>

<svelte:head>
	<title>Movotopia | Movies</title>
</svelte:head>

<svelte:window on:scroll={() => saveScroll('movies')} />

<Trending type="movie" />
<h2 class="text-[1.2rem] text-center font-bold text-white mt-[10px]">
	Watched
</h2>
<PageSelector {pages} {changeIndex} {index} {length} />
<List data={paginatedItems} type={'movie'} />
<PageSelector {pages} {changeIndex} {index} {length} />
