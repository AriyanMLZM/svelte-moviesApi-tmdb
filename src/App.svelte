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
<main>
	<Router {routes} />
</main>
