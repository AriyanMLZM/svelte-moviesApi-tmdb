<script lang="ts">
	export let data
	export let type
	import { Item } from './index.svelte'
</script>

<section
	class="w-full h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[40px] pt-[20px] px-[20px] pb-[50px] overflow-y-auto"
>
	{#each data as item}
		<Item {item} {type} />
		<Item {item} {type} />
		<Item {item} {type} />
		<Item {item} {type} />
		<Item {item} {type} />
		<Item {item} {type} />	
	{/each}
</section>
