<script lang="ts">
	import { CreatePostButton } from '$features/posts';
	import { posts } from '$entities/posts';
	import { PostCard } from '$shared/ui';
</script>

<header class="blog-header">
	<h1>Блог</h1>
	<CreatePostButton />
</header>

{#if $posts.length === 0}
	<div class="empty-state">
		<svg
			class="empty-state-icon"
			width="48"
			height="48"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
		>
			<path
				d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
			/>
		</svg>
		<h2>Пока нет ни одного поста</h2>
		<p>Создайте первую запись, чтобы начать вести блог</p>
		<CreatePostButton />
	</div>
{:else}
	<div class="posts-list">
		{#each $posts as post (post.id)}
			<PostCard {...post} />
		{/each}
	</div>
{/if}

<style>
	.blog-header {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin: var(--spacing-xl) auto;
		padding-bottom: var(--spacing-lg);
		border-bottom: 1px solid var(--color-border);
	}

	.blog-header h1 {
		font-size: var(--font-size-3xl);
		font-weight: 700;
		margin-bottom: var(--spacing-xs);
		color: var(--color-text);
	}

	.empty-state {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		padding: var(--spacing-xl);
		background-color: var(--color-surface);
		box-shadow: var(--shadow-md);
		border-radius: var(--radius-lg);
		max-width: 400px;
		margin: 0 auto;
	}

	.empty-state-icon {
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-lg);
	}

	.empty-state h2 {
		font-size: var(--font-size-xl);
		margin-bottom: var(--spacing-sm);
		color: var(--color-text);
	}

	.empty-state p {
		color: var(--color-text-secondary);
		margin-bottom: var(--spacing-lg);
	}

	.posts-list {
		display: grid;
		grid-template-columns: 1fr;
		gap: var(--spacing-md);
		width: 100%;
	}

	@media (min-width: 640px) {
		.posts-list {
			grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
			gap: var(--spacing-lg);
		}

		.blog-header {
			margin-bottom: var(--spacing-xl);
		}

		.blog-header h1 {
			font-size: var(--font-size-3xl);
		}
	}

	@media (min-width: 768px) {
		.posts-list {
			grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		}

		.empty-state {
			padding: var(--spacing-xl) var(--spacing-xl);
		}
	}

	@media (min-width: 1024px) {
		.posts-list {
			grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
		}
	}
</style>
