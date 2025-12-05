<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<div class="app">
	<main class="container">
		{@render children()}
	</main>
</div>

<style>
	.app {
		margin: 0 auto;
		min-height: 100vh;
	}
	.app main {
		max-width: 64rem;
		min-height: 100vh;
		padding: var(--spacing-xl) 1.5rem;
		background-color: var(--color-bg);
	}
</style>
