<script lang="ts">
	import type { ITv } from '../types/index.svelte'

	export let tv: ITv
</script>

<div
	class="w-full flex justify-center items-center flex-col md:justify-normal md:items-start md:flex-row gap-[40px]"
>
	<div class="w-[300px] h-[300px]">
		<img
			src="https://image.tmdb.org/t/p/original{tv.backgroundImage}"
			alt={tv.title}
			class="w-full h-full object-cover rounded-[20px]"
		/>
	</div>
	<div class="text-white">
		<h1 class="text-[2rem] font-bold">{tv.title}</h1>
		{#each tv.genres as genre, index}
			<span class="text-[0.8rem] text-primary">{genre.name}</span>
			{#if index !== tv.genres.length - 1}
				<span class="text-[0.8rem]">- {' '}</span>
			{/if}
		{/each}
		<h2 class="text-[0.85rem] mt-[20px] w-[250px] flex justify-between">
			<span class="text-primary">Language</span>
			{tv.language}
		</h2>
		<h2 class="text-[0.85rem] mt-[20px] w-[250px] flex justify-between">
			<span class="text-primary">First Air</span>
			{tv.firstAir}
		</h2>
		<h2 class="text-[0.85rem] mt-[20px] w-[250px] flex justify-between">
			<span class="text-primary">Last Air</span>
			{tv.lastAir}
		</h2>
		<h2 class="text-[0.85rem] mt-[20px] w-[250px] flex justify-between">
			<span class="text-primary">Status</span>
			{tv.status}
		</h2>
		<h2 class="text-[0.85rem] mt-[20px] w-[250px] flex justify-between">
			<span class="text-primary">Seasons</span>
			{tv.seasonsNum}
		</h2>
		<h2 class="text-[0.85rem] mt-[20px] w-[250px] flex justify-between">
			<span class="text-primary">Episodes</span>
			{tv.episodesNum}
		</h2>
		<h2 class="text-[0.85rem] mt-[20px] w-[250px] flex justify-between">
			<span class="text-primary">Tmdb</span>
			{tv.vote.toFixed(1)}
		</h2>
	</div>
	<div class="p-[10px] md:p-[50px]">
		<h2 class="text-white text-[1.1rem]">" {tv.tagline} "</h2>
	</div>
</div>
<div class="p-[20px] mt-[20px]">
	<p class="text-white text-[0.9rem] text-justify">
		{tv.overview}
	</p>
</div>
