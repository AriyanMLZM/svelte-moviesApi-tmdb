<script lang="ts">
	import Router from 'svelte-spa-router'
	import randomColors from './constants/randomColors'
	import randomNumber from './utils/randomNumber'
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

	const randomColor = randomColors[randomNumber(randomColors.length)]
	document.documentElement.style.setProperty('--accentColor', randomColor)

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
			rgb(19, 19, 19) 40%,
			var(--accentColor) 150%
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
	a:hover {
		color: var(--accentColor);
	}
</style>
