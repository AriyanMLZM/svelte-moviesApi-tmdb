<script lang="ts">
	import { push } from 'svelte-spa-router'
	import { notFoundImage } from '../assets/images/index.svelte'
</script>

<section class="w-full h-full flex-col flex-center bg-primary">
	<img draggable="false" src={notFoundImage} alt="not-found" width="500px" />
	<button
		class="bg-white text-[20px] rounded-[20px] py-[10px] px-[20px] font-bold hover:bg-primary hover:text-white active:bg-primary active:text-white text-primary"
		on:click={() => push('/')}
		type="button">Home</button
	>
</section>
