<script lang="ts">
	import Icon from "@iconify/svelte"

	export let src: string
	export let alt: string
	let loading = true
	let imageError = false
</script>

<div
	class={`w-full h-full flex-center bg-white/20 ${loading ? ' animate-pulse' : ''}`}
>
	{#if !imageError}
		<img
			{src}
			{alt}
			class="w-full h-full object-cover"
			on:load={() => (loading = false)}
			on:error={() => {
				loading = false
				imageError = true
			}}
		/>
	{:else}
		<Icon
			icon="clarity:image-solid"
			class="text-[#111] text-[1.8rem]"
		/>
	{/if}
</div>
