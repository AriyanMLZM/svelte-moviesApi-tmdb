<script lang="ts">
	import { onMount } from 'svelte'
	import {
		Error,
		Loader,
		TvInfo,
		Creators,
		Seasons,
		CastList,
		Networks,
		BackButton,
	} from '../lib/index.svelte'
	import type { IApiTv } from '../types/index.svelte'
	import { scrollTop } from '../utils/scrollManager'

	export let params

	let docTitle = 'Loading...'

	onMount(() => scrollTop())

	const getData = async () => {
		const resTmdb = await fetch(
			`${import.meta.env.VITE_PROXY_API}https://api.themoviedb.org/3/tv/${params.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
		)
		const {
			name: title,
			last_air_date: lastAir,
			first_air_date: firstAir,
			poster_path: poster,
			vote_average: vote,
			backdrop_path: backgroundImage,
			genres,
			original_language: language,
			overview,
			tagline,
			created_by: creators,
			number_of_episodes: episodesNum,
			number_of_seasons: seasonsNum,
			seasons,
			status,
			networks,
		} = (await resTmdb.json()) as IApiTv

		docTitle = title
		return {
			title,
			poster,
			vote,
			backgroundImage,
			genres,
			language,
			overview,
			tagline,
			lastAir,
			firstAir,
			creators,
			episodesNum,
			seasonsNum,
			seasons,
			status,
			networks,
		}
	}

	const getCast = async () => {
		const resTmdb = await fetch(
			`${import.meta.env.VITE_PROXY_API}https://api.themoviedb.org/3/tv/${params.id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
		)
		const { cast } = await resTmdb.json()
		return cast
	}
</script>

<svelte:head>
	<title>{docTitle}</title>
</svelte:head>

{#await getData()}
	<div class="h-screen w-full bg-black/80">
		<Loader />
	</div>
{:then tv}
	<div
		class="w-full min-h-screen"
		style="
			background-image: url('{import.meta.env.VITE_TMDB_IMAGE_URL_BACKGROUND +
			tv.backgroundImage}');
			background-position: center;
			background-size: cover;
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
		"
	></div>
	<div
		class="w-full h-full bg-black/80 backdrop-blur-[3px] px-[20px] pb-[60px]"
	>
		<BackButton />
		<TvInfo {tv} />
		<Seasons seasons={tv.seasons} id={params.id} />
		<Networks networks={tv.networks} />
		<Creators creators={tv.creators} role="Creator" />
		{#await getCast()}
			<div class="h-[200px] w-full">
				<Loader />
			</div>
		{:then cast}
			<CastList {cast} />
		{:catch error}
			<Error msg={error.message} />
		{/await}
	</div>
{:catch error}
	<Error msg={error.message} />
{/await}
