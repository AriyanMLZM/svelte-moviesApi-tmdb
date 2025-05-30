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
		'/shows': Tvs,
		'/movie/:id': Movie,
		'/tv/:id': Tv,
		'/season/:id/:seasonNum': Season,
		'/search': Search,
		'*': NotFound,
	}
</script>

<div></div>
<Navbar />
<Router {routes} />
<footer
	class="w-full bg-black/70 text-white text-[0.8rem] py-[60px] flex-center"
>
	<a href="http://github.com/AriyanMlzm" target="_blank">
		Developed by @AriyanMlzm
	</a>
</footer>

<style>
	div {
		background: linear-gradient(
			45deg,
			rgb(19, 19, 19) 38%,
			rgba(254, 87, 2, 1) 100%
		);
		background-size: cover;
		background-position: center;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
		width: 100%;
		height: 100vh;
	}
</style>
