<script lang="ts">
	type BreadcrumbItem = {
		title: string;
		href?: string;
	};

	let { items = [] }: { items: BreadcrumbItem[] } = $props();
</script>

<nav class="breadcrumbs" aria-label="Хлебные крошки">
	{#each items as item, i}
		{#if item.href}
			<a href={item.href} class="breadcrumb-link">
				{item.title}
			</a>
		{:else}
			<span class="breadcrumb-current">{item.title}</span>
		{/if}

		{#if i < items.length - 1}
			<span class="breadcrumb-separator">/</span>
		{/if}
	{/each}
</nav>

<style>
	.breadcrumbs {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		padding: 0;
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}

	.breadcrumb-link {
		color: var(--color-text-secondary);
		text-decoration: none;
		transition: color var(--transition-fast);
	}

	.breadcrumb-link:hover {
		color: var(--color-primary-hover);
		text-decoration: underline;
	}

	.breadcrumb-separator {
		margin: 0 var(--spacing-xs);
		opacity: 0.6;
	}

	.breadcrumb-current {
		color: var(--color-text);
		font-weight: 500;
	}

	@media (max-width: 768px) {
		.breadcrumbs {
			font-size: var(--font-size-xs);
			overflow-x: auto;
			white-space: nowrap;
			padding-bottom: var(--spacing-sm);
		}
	}
</style>
