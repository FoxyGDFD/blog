<script lang="ts">
	import type { Post } from '$entities/posts';
	import { CalendarIcon, EditIcon } from '../icons';
	import { formatDate } from '../utils';
	import { spa } from '$shared/lib/routing';

	const { id, title, createdAt, updatedAt }: Post = $props();

	let createdAtFormatted = $derived(formatDate(createdAt));
	let updatedAtFormatted = $derived(formatDate(updatedAt));
</script>

<a {@attach spa} href={`/posts/${id}`} class="post-link">
	<article class="post-card" aria-labelledby="post-title-{id}">
		<header class="post-card-header">
			<h2 id="post-title-{id}" class="post-title">{title}</h2>
		</header>

		<div class="post-card-content">
			<div class="post-meta">
				<div class="date-info">
					<div class="date-item">
						<CalendarIcon />
						<span class="date-label">Создан:</span>
						<time datetime={new Date(createdAt).toISOString()} class="date-value">
							{createdAtFormatted}
						</time>
					</div>

					<div class="date-item">
						<EditIcon />
						<span class="date-label">Изменён:</span>
						<time datetime={new Date(updatedAt).toISOString()} class="date-value">
							{updatedAtFormatted}
						</time>
					</div>
				</div>
			</div>
		</div>

		<div class="post-card-footer">
			<span class="read-more">Читать →</span>
		</div>
	</article>
</a>

<style>
	.post-link {
		display: block;
		text-decoration: none;
		color: inherit;
		height: 100%;
	}

	.post-card {
		background-color: var(--color-surface);
		border-radius: var(--radius-lg);
		border: 1px solid var(--color-border);
		padding: var(--spacing-lg);

		display: flex;
		flex-direction: column;
		height: 100%;
		transition: all var(--transition-normal);
		cursor: pointer;
		user-select: none;
		min-height: 180px;
	}

	.post-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-lg);
		border-color: var(--color-primary);
		background-color: var(--color-hover);
	}

	.post-card:active {
		transform: translateY(-2px);
	}

	.post-card-header {
		margin-bottom: var(--spacing-md);
	}

	.post-title {
		font-size: var(--font-size-xl);
		font-weight: 600;
		line-height: 1.3;
		color: var(--color-text);
		margin: 0;
		overflow: hidden;
	}

	.post-card-content {
		flex: 1;
		margin-bottom: var(--spacing-md);
	}

	.post-meta {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.date-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.date-item {
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		font-size: var(--font-size-sm);
		color: var(--color-text-secondary);
	}

	.date-label {
		font-weight: 500;
		margin-right: var(--spacing-xs);
	}

	.date-value {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', monospace;
		font-size: var(--font-size-xs);
	}

	.post-card-footer {
		display: flex;
		justify-content: flex-end;
		border-top: 1px solid var(--color-border);
		padding-top: var(--spacing-md);
		margin-top: auto;
	}

	.read-more {
		font-size: var(--font-size-sm);
		font-weight: 500;
		color: var(--color-primary);
		display: flex;
		align-items: center;
		gap: var(--spacing-xs);
		transition: color var(--transition-fast);
	}

	.post-card:hover .read-more {
		color: var(--color-primary-hover);
	}

	@media (max-width: 640px) {
		.post-card {
			padding: var(--spacing-md);
			min-height: 160px;
		}

		.post-title {
			font-size: var(--font-size-lg);
		}

		.date-item {
			flex-wrap: wrap;
		}

		.date-label,
		.date-value {
			font-size: var(--font-size-xs);
		}

		.post-link::after {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}

	@media (hover: none) {
		.post-card:hover {
			transform: none;
		}

		.post-card:active {
			background-color: var(--color-hover);
			transform: scale(0.98);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.post-card,
		.post-card:hover {
			transition: none;
			transform: none;
		}
	}
</style>
