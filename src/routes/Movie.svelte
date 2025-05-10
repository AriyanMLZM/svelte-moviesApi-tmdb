<script lang="ts">
	import {
		Error,
		Loader,
		MovieInfo,
		CastList,
		Creators,
		BackButton,
	} from '../lib/index.svelte'
	import type { IApiMovie } from '../types/index.svelte'

	export let params

	let docTitle = 'Loading...'

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
	<section
		class="w-full min-h-screen"
		style="
			background-image: url('{import.meta.env.VITE_TMDB_IMAGE_URL_BACKGROUND +
			movie.backgroundImage}');
			background-attachment: fixed;
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;
		"
	>
		<div
			class="w-full h-full bg-black/80 backdrop-blur-[3px] px-[20px] pb-[60px]"
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
	</section>
{:catch error}
	<Error msg={error.message} />
{/await}
