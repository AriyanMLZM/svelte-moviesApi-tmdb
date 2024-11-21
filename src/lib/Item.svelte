<script lang="ts">
	import { link } from 'svelte-spa-router'
	export let item
	export let type

	let imageError = false
</script>

<a
	href="/{type}/{item.id}"
	use:link
	class="bg-black/50 hover:bg-white/30 active:bg-white/30 rounded-[20px] w-full flex justify-between flex-col hover:text-black active:text-black text-white"
>
	<div class="w-full h-full bg-gray-300 rounded-t-[20px]">
		{#if !imageError}
			<img
				src={import.meta.env.VITE_TMDB_IMAGE_URL_POSTER + item.poster}
				alt={item.title}
				class="w-full h-full object-cover rounded-t-[20px]"
				on:error={() => (imageError = true)}
			/>
		{:else}{/if}
	</div>
	<div class="w-full px-[20px] py-[10px] select-none">
		<h1
			class="text-[1rem] font-bold text-left w-full overflow-hidden overflow-ellipsis text-nowrap"
		>
			{item.title}
		</h1>
		<div class="w-full flex items-center justify-between mt-[10px] text-[16px]">
			<h2>tmdb - {item.rate}</h2>
			<h2>{item.date}</h2>
		</div>
	</div>
</a>
