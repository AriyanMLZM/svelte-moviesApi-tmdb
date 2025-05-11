<script lang="ts">
	import { onMount } from 'svelte'
	import {
		Error,
		Loader,
		MovieInfo,
		CastList,
		Creators,
		BackButton,
	} from '../lib/index.svelte'
	import type { IApiMovie } from '../types/index.svelte'
	import { scrollTop } from '../utils/scrollManager'

	export let params

	let docTitle = 'Loading...'

	onMount(() => scrollTop())

	const getData = async () => {
		const resTmdb = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
		)
		const {
			title: title,
			release_date: releaseDate,
			poster_path: poster,
			vote_average: vote,
			backdrop_path: backgroundImage,
			genres,
			original_language: language,
			overview,
			runtime,
			tagline,
		} = (await resTmdb.json()) as IApiMovie

		docTitle = title
		return {
			title,
			releaseDate,
			poster,
			vote,
			backgroundImage,
			genres,
			language,
			overview,
			runtime,
			tagline,
		}
	}

	const getCast = async () => {
		const resTmdb = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
		)
		const { cast, crew } = await resTmdb.json()
		const directors = crew.filter((item: any) => item.job === 'Director')

		return { directors, actors: cast }
	}
</script>

<svelte:head>
	<title>{docTitle}</title>
</svelte:head>

{#await getData()}
	<div class="h-screen w-full bg-black/80">
		<Loader />
	</div>
{:then movie}
	<div
		class="w-full min-h-screen"
		style="
			background-image: url('{import.meta.env.VITE_TMDB_IMAGE_URL_BACKGROUND +
			movie.backgroundImage}');
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
		class="w-full min-h-screen bg-black/80 backdrop-blur-[3px] px-[20px] pb-[60px]"
	>
		<BackButton />
		<MovieInfo {movie} />
		{#await getCast()}
			<div class="h-[200px] w-full">
				<Loader />
			</div>
		{:then cast}
			<Creators creators={cast.directors} role={'Director'} />
			<CastList cast={cast.actors} />
		{:catch error}
			<Error msg={error.message} />
		{/await}
	</div>
{:catch error}
	<Error msg={error.message} />
{/await}
