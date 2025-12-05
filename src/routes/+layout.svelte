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
		min-height: 100vh;
		background-color: var(--color-bg);
	}
	.app main {
		margin: 0 auto;
		max-width: 64rem;
		min-height: 100vh;
		padding: var(--spacing-xl) 1.5rem;
	}
</style>
