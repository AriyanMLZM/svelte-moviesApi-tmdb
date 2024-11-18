<script lang="ts">
	import { link } from 'svelte-spa-router'
</script>

<nav
	class="w-full flex-center h-[50px] fixed top-0 left-0 bg-black/30 gap-[30px] text-white text-[1rem]"
>
	<a class="font-bold hover:text-primary" href="/" use:link>MOVIE</a>
	<a class="font-bold hover:text-primary" href="/tvs" use:link>TV</a>
</nav>
