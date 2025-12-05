<script lang="ts">
	import { onMount } from 'svelte';
	import { posts } from '$entities/posts';
	import type { Post } from '$entities/posts';
	import { formatDate } from '$shared/utils';
	import { EditPostButton } from '$features/posts';
	import RemovePostButton from '$features/posts/RemovePostButton.svelte';
	import { CalendarIcon, EditIcon } from '$shared/icons';
	import { Breadcrumbs, NoPostWidget } from '$shared/ui';
	import { params } from '$shared/lib/routing';

	const { id } = $params;

	let post = $state<Post | null>(null);
	onMount(() => {
		const foundPost = $posts.find((p) => p.id === id);
		if (foundPost) {
			post = foundPost;
		}
	});

	const formatContent = (content: string): string => {
		return content
			.replace(/\n/g, '<br>')
			.replace(/\*\*([^*]+?)\*\*/g, `<b>$1</b>`)
			.replace(/\*([^*]+?)\*/g, `<i>$1</i>`);
	};
</script>

{#if post}
	<article class="container">
		<header class="card">
			<Breadcrumbs items={[{ title: 'Блог', href: '/' }, { title: post.title }]} />
			<div class="post-header-main">
				<h1 class="post-title">{post.title}</h1>

				<div class="post-actions">
					<EditPostButton id={post.id} />
					<RemovePostButton id={post.id} />
				</div>
			</div>

			<div class="post-meta">
				<div class="meta-item">
					<CalendarIcon />
					<div class="meta-content">
						<span class="meta-label">Создан</span>
						<time datetime={new Date(post.createdAt).toISOString()} class="meta-value">
							{formatDate(post.createdAt)}
						</time>
					</div>
				</div>

				<div class="meta-item">
					<EditIcon />
					<div class="meta-content">
						<span class="meta-label">Изменён</span>
						<time datetime={new Date(post.updatedAt).toISOString()} class="meta-value">
							{formatDate(post.updatedAt)}
						</time>
					</div>
				</div>
			</div>
		</header>

		<div class="card post-content">
			<div class="content-text">
				{@html formatContent(post.content)}
			</div>
		</div>
	</article>
{:else}
	<NoPostWidget />
{/if}

<style>
	.post-header-main {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-lg);
	}

	.post-title {
		font-size: var(--font-size-2xl);
		font-weight: 700;
		line-height: 1.3;
		color: var(--color-text);
		margin: 0;
		flex: 1;
	}

	.post-actions {
		display: flex;
		gap: var(--spacing-sm);
		flex-shrink: 0;
	}

	.post-meta {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		padding: var(--spacing-md);
		background-color: var(--color-bg);
		border-radius: var(--radius-md);
	}

	.meta-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.meta-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.meta-label {
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
		font-weight: 500;
	}

	.meta-value {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', monospace;
		font-size: var(--font-size-sm);
		color: var(--color-text);
	}

	.post-content {
		padding: var(--spacing-xl);
	}

	.content-text {
		font-size: var(--font-size-lg);
		line-height: 1.7;
		color: var(--color-text);
		white-space: pre-wrap;
		word-wrap: break-word;
	}

	@media (max-width: 768px) {
		.post-header-main {
			flex-direction: column;
			align-items: stretch;
			gap: var(--spacing-md);
		}

		.post-title {
			font-size: var(--font-size-xl);
		}

		.post-actions {
			flex-direction: column;
		}

		.post-content {
			padding: var(--spacing-lg);
		}

		.content-text {
			font-size: var(--font-size-md);
		}

		.no-post {
			padding: var(--spacing-lg);
		}
	}

	@media (max-width: 640px) {
		.post-meta {
			flex-direction: column;
			gap: var(--spacing-sm);
		}

		.meta-item {
			flex-direction: column;
			align-items: flex-start;
			gap: var(--spacing-xs);
		}
	}

	@media (max-width: 480px) {
		.post-content {
			padding: var(--spacing-md);
			background-color: var(--color-surface);
			margin-bottom: var(--spacing-md);
			border-radius: var(--radius-md);
		}
	}
</style>
