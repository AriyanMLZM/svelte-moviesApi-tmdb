<script lang="ts">
	import { link } from 'svelte-spa-router'
	import { Image } from './index.svelte'
	import Icon from '@iconify/svelte'
	export let item
	export let type

	$: gettingData = getData()

	const getData = async () => {
		const resTmdb = await fetch(
			`https://api.themoviedb.org/3/${type}/${item.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
		)
		const {
			title: title,
			name, // for tv
			first_air_date, // for tv
			release_date: date,
			poster_path: poster,
			vote_average: vote,
		} = await resTmdb.json()

		return {
			id: item.id,
			title: title || name,
			date: first_air_date || date.split('-')[0],
			poster,
			rate: vote.toFixed(1),
		}
	}
</script>

{#await gettingData}
	<div
		class="w-full min-h-[150px] animate-pulse bg-black/30 rounded-[20px]"
	></div>
{:then itemData}
	<a
		href="/{type}/{itemData.id}"
		use:link
		class="bg-black/30 hover:bg-white/30 active:bg-white/30 rounded-[20px] w-full flex justify-between flex-col hover:text-black active:text-black text-white"
	>
		<div class="w-full h-full min-h-[200px] rounded-t-[20px] overflow-hidden">
			<Image
				src={import.meta.env.VITE_TMDB_IMAGE_URL_POSTER + itemData.poster}
				alt={itemData.title}
			/>
		</div>
		<div class="w-full px-[0.7rem] py-[10px] select-none">
			<h1
				class="text-[0.9rem] font-bold text-left w-full overflow-hidden overflow-ellipsis text-nowrap"
			>
				{itemData.title}
			</h1>
			<div
				class="w-full flex items-center justify-between mt-[10px] text-[0.8rem]"
			>
				<h2>tmdb - {itemData.rate}</h2>
				<h2>{itemData.date.split('-')[0]}</h2>
			</div>
		</div>
	</a>
{:catch}
	<div class="w-full bg-black/30 min-h-[150px] rounded-[20px] flex-center">
		<Icon
			icon="material-symbols:error-rounded"
			class="text-white text-[1.8rem]"
		/>
	</div>
{/await}
