<script lang="ts">
	let { children, opened } = $props();
</script>

{#if opened}
	<div id="background"></div>
	<div id="modal">
		{@render children()}
	</div>
{/if}

<style>
	#background {
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #333;
		opacity: 0.4;
	}

	#modal {
		position: fixed;
		z-index: 2;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		padding: var(--spacing-lg);
		background-color: var(--color-surface);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		box-shadow: var(--shadow-md);
	}
</style>
