<script lang="ts">
	import movies from '../constants/tmdb-ids.movies.json'
	import { List, Trending, PageSelector } from '../lib/index.svelte'

	const packSize = 20
	const length = movies.length
	const pages = Math.ceil(length / packSize)
	let index = 1

	const changeIndex = (action: string) => {
		switch (action) {
			case 'up':
				index = index === pages ? 1 : index + 1
				break
			case 'down':
				index = index === 1 ? pages : index - 1
				break
		}
	}

	$: paginatedItems = movies.slice((index - 1) * packSize, index * packSize)
</script>

<svelte:head>
	<title>Movotopia | Movie</title>
</svelte:head>

<Trending type="movie" />
<PageSelector {pages} {changeIndex} {index} {length} />
<List data={paginatedItems} type={'movie'} />
<PageSelector {pages} {changeIndex} {index} {length} />
<footer
	class="w-full bg-black/50 text-white text-[0.8rem] mt-[60px] h-[80px] flex-center"
>
	<a href="http://github.com/AriyanMlzm" target="_blank">
		Developed by @AriyanMlzm
	</a>
</footer>
