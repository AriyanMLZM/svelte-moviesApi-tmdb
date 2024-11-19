<script lang="ts">
	import { link } from 'svelte-spa-router'
</script>

<nav
	class="flex-center z-10 py-[10px] px-[20px] fixed top-[5px] right-[20px] rounded-[20px] bg-black/70 gap-[30px] text-white text-[0.8rem] border-2 border-primary"
>
	<a class="font-bold hover:text-primary" href="/" use:link>MOVIE</a>
	<a class="font-bold hover:text-primary" href="/tvs" use:link>TV</a>
</nav>
