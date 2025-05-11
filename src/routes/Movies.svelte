<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import movies from '../constants/tmdb-ids.movies.json'
	import { List, Trending, PageSelector } from '../lib/index.svelte'

	const packSize = 20
	const length = movies.length
	const pages = Math.ceil(length / packSize)
	const storedPage = Number(localStorage.getItem('pageMovies'))
	let index: number = storedPage < 1 || storedPage > pages ? 1 : storedPage

	const handleScroll = () => {
		localStorage.setItem('scrollPos_movies', window.scrollY.toString())
	}

	onMount(() => {
		const storedPos = localStorage.getItem('scrollPos_movies')
		if (storedPos) {
			setTimeout(() => {
				window.scrollTo({ top: Number(storedPos), behavior: 'instant' })
			}, 50)
		}
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
		localStorage.setItem('pageMovies', index.toString())
	}

	$: paginatedItems = movies.slice((index - 1) * packSize, index * packSize)
</script>

<svelte:head>
	<title>Movotopia | Movie</title>
</svelte:head>

<svelte:window on:scroll={handleScroll} />

<Trending type="movie" />
<PageSelector {pages} {changeIndex} {index} {length} />
<List data={paginatedItems} type={'movie'} />
<PageSelector {pages} {changeIndex} {index} {length} />
