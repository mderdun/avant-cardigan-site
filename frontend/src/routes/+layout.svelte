<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="layout">
	<div class="h-full header">
		<Header />
	</div>
	<div class="slot">
		<slot />
	</div>
</div>
