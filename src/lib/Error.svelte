<script lang="ts">
	import Icon from '@iconify/svelte'
	export let msg: string
</script>

<section class="w-full h-full flex-col flex-center p-[20px]">
	<Icon icon="mdi:error" class="text-[5rem] text-primary" />
	<p class="text-white font-bold text-[1.2rem]">{msg}!</p>
	<button
		class="bg-primary text-[1rem] rounded-[20px] py-[10px] px-[20px] font-bold hover:bg-white hover:text-primary active:bg-white active:text-primary mt-[40px]"
		on:click={() => window.location.reload()}
		type="button">Refresh</button
	>
</section>
