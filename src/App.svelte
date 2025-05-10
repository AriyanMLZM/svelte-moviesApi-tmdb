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
	<footer class="w-full bg-black/50 text-white text-[0.8rem] mt-[60px] h-[80px] flex-center">
		<a href="http://github.com/AriyanMlzm" target="_blank">
			Developed by @AriyanMlzm
		</a>
	</footer>
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
