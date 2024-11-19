<script lang="ts">
	import type { INetwork } from '../types/index.svelte'
	export let networks: INetwork[]
</script>

<section
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[60px]"
>
	{#each networks as network}
		<div class="w-[200px]">
			{#if network.logo_path}
				<img
					src={import.meta.env.VITE_TMDB_IMAGE_URL + network.logo_path}
					alt={network.name}
					class="w-full h-full object-cover"
				/>
			{/if}
		</div>
	{/each}
</section>
