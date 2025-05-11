<script lang="ts">
	import { onDestroy, onMount } from 'svelte'
	import tvs from '../constants/tmdb-ids.series.json'
	import { List, Trending, PageSelector } from '../lib/index.svelte'

	const packSize = 20
	const length = tvs.length
	const pages = Math.ceil(length / packSize)
	const storedPage = Number(localStorage.getItem('pageTvs'))
	let index: number = storedPage < 1 || storedPage > pages ? 1 : storedPage

	const handleScroll = () => {
		localStorage.setItem('scrollPos_tvs', window.scrollY.toString())
	}

	onMount(() => {
		const storedPos = localStorage.getItem('scrollPos_tvs')
		if (storedPos) {
			setTimeout(() => {
				window.scrollTo({ top: Number(storedPos), behavior: 'smooth' })
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
		localStorage.setItem('pageTvs', index.toString())
	}

	$: paginatedItems = tvs.slice((index - 1) * packSize, index * packSize)
</script>

<svelte:head>
	<title>Movotopia | Tv</title>
</svelte:head>

<svelte:window on:scroll={handleScroll} />

<Trending type="tv" />
<PageSelector {pages} {changeIndex} {index} {length} />
<List data={paginatedItems} type={'tv'} />
<PageSelector {pages} {changeIndex} {index} {length} />
<footer
	class="w-full bg-black/50 text-white text-[0.8rem] mt-[60px] h-[80px] flex-center"
>
	<a href="http://github.com/AriyanMlzm" target="_blank">
		Developed by @AriyanMlzm
	</a>
</footer>
