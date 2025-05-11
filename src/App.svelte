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
<Router {routes} />
<footer
	class="w-full bg-black/50 text-white text-[0.8rem] pt-[60px] pb-[40px] flex-center"
>
	<a href="http://github.com/AriyanMlzm" target="_blank">
		Developed by @AriyanMlzm
	</a>
</footer>
