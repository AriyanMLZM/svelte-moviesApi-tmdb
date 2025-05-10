<script lang="ts">
	import tvs from '../constants/tmdb-ids.series.json'
	import { List, Error, Trending, PageSelector } from '../lib/index.svelte'
	import { Loader } from '../lib/index.svelte'

	const packSize = 20
	const length = tvs.length
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

	const getData = async (index: number) => {
		let data = []
		const start = index * packSize
		const end = index === pages - 1 ? length : (index + 1) * packSize
		for (let i = start; i < end; i++) {
			const resTmdb = await fetch(
				`https://api.themoviedb.org/3/tv/${tvs[i].id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
			)
			const {
				name: title,
				first_air_date: date,
				poster_path: poster,
				vote_average: vote,
			} = await resTmdb.json()

			data.push({
				id: tvs[i].id,
				title,
				date: date.split('-')[0],
				poster,
				rate: vote.toFixed(1),
			})
		}
		return data
	}

	$: paginatedItems = tvs.slice((index - 1) * packSize, index * packSize)
</script>

<svelte:head>
	<title>Movotopia | Tv</title>
</svelte:head>

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
