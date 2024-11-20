<script lang="ts">
	import Router from 'svelte-spa-router'

	import {
		Movies,
		Tvs,
		NotFound,
		Tv,
		Movie,
		Season,
	} from './routes/index.svelte'
	import { Navbar } from './lib/index.svelte'

	const routes = {
		'/': Movies,
		'/tvs': Tvs,
		'/movie/:id': Movie,
		'/tv/:id': Tv,
		'/season/:id/:seasonNum': Season,
		'*': NotFound,
	}
</script>

<Navbar />
<main class="w-full h-screen overflow-y-auto list-scroll">
	<Router {routes} />
</main>

<style>
	main {
		background: linear-gradient(
			45deg,
			rgba(97, 97, 97, 1) 38%,
			rgba(254, 87, 2, 1) 100%
		);
	}
</style>
