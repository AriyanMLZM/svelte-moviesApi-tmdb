<script lang="ts">
	import { link } from 'svelte-spa-router'
	export let item
	export let type
</script>

<a
	href="/{type}/{item.id}"
	use:link
	class="bg-black/50 hover:bg-white/30 rounded-[20px] w-full flex justify-between flex-col hover:text-black text-white"
>
	<img
		src="https://image.tmdb.org/t/p/original{item.poster}"
		alt={item.title}
		class="w-full h-full object-cover rounded-t-[20px]"
	/>
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
