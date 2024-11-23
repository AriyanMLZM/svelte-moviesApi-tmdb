<script lang="ts">
	export let creators
	export let role: string
</script>

<div
	class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[20px] mt-[60px]"
>
	{#each creators as person}
		<div class="flex">
			<div class="w-[100px] h-[120px] bg-white/20 text-white text-[0.8rem] rounded-[20px]">
				{#if person.profile_path}
					<img
						src={import.meta.env.VITE_TMDB_IMAGE_URL_PROFILE + person.profile_path}
						alt={person.name}
						class="w-full h-full object-cover rounded-[20px]"
					/>
				{/if}
			</div>
			<div class="text-white p-[20px]">
				<h2 class="text-[0.9rem]">{person.name}</h2>
				<h3 class="text-[0.8rem] text-primary">{role}</h3>
			</div>
		</div>
	{/each}
</div>
