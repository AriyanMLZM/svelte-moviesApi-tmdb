<script lang="ts">
	import Router from 'svelte-spa-router'

	import {
		Movies,
		Tvs,
		NotFound,
		Tv,
		Movie,
		Season,
		Search,
	} from './routes/index.svelte'
	import { Navbar } from './lib/index.svelte'

	const routes = {
		'/': Movies,
		'/tvs': Tvs,
		'/movie/:id': Movie,
		'/tv/:id': Tv,
		'/season/:id/:seasonNum': Season,
		'/search': Search,
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
			rgb(19, 19, 19) 38%,
			rgba(254, 87, 2, 1) 100%
		);
	}
</style>
