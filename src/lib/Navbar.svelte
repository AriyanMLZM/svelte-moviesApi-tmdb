<script lang="ts">
	import { link, location } from 'svelte-spa-router'
	import Icon from '@iconify/svelte'
</script>

<nav
	class="flex-center z-10 py-[10px] px-[20px] fixed top-[5px] right-[20px] rounded-[20px] bg-black/70 gap-[30px] text-white text-[0.8rem] border-2 border-primary"
>
	<a
		class="font-bold hover:text-primary active:text-primary {$location ===
			'/' && 'text-primary'}"
		href="/"
		use:link>MOVIE</a
	>
	<a
		class="font-bold hover:text-primary active:text-primary {$location ===
			'/tvs' && 'text-primary'}"
		href="/tvs"
		use:link>TV</a
	>
	<a
		class="font-bold hover:text-primary active:text-primary {$location ===
			'/search' && 'text-primary'}"
		href="/search"
		use:link
	>
		<Icon icon="lucide:search" class="text-[1rem]" />
	</a>
</nav>
