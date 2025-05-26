<script lang="ts">
	import { fade } from 'svelte/transition'
	export let data
	export let type
	import { Item } from './index.svelte'
</script>

<section
	in:fade={{ duration: 500 }}
	class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-[1.2rem] pt-[30px] px-[20px] pb-[50px]"
>
	{#each data as item (item.id)}
		<Item {item} {type} />
	{/each}
</section>
