<script lang="ts">
	import { onMount } from 'svelte'
	import tvs from '../constants/tmdb-ids.series-datas.json'
	import { List, Trending, PageSelector } from '../lib/index.svelte'
	import { restoreScroll, saveScroll } from '../utils/scrollManager'

	const packSize = 20
	const length = tvs.length
	const pages = Math.ceil(length / packSize)
	const storedPage = Number(sessionStorage.getItem('pageTvs'))
	let index: number = storedPage < 1 || storedPage > pages ? 1 : storedPage

	onMount(() => {
		restoreScroll('shows')
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
		sessionStorage.setItem('pageTvs', index.toString())
	}

	$: paginatedItems = tvs.slice((index - 1) * packSize, index * packSize)
</script>

<svelte:head>
	<title>Movotopia | Shows</title>
</svelte:head>

<svelte:window on:scroll={() => saveScroll('shows')} />

<Trending type="tv" />
<h2 class="text-[1.2rem] text-center font-bold text-white mt-[10px]">
	Watched
</h2>
<PageSelector {pages} {changeIndex} {index} {length} />
<List data={paginatedItems} type={'tv'} />
<PageSelector {pages} {changeIndex} {index} {length} />
