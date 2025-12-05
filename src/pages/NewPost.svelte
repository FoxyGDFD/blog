<script lang="ts">
	import { Breadcrumbs, CreatePostTips } from '$shared/ui';
	import { PostForm } from '$features/posts';
	import { createPost, type SavePost } from '$entities/posts';
	import { navigate } from '$shared/lib/routing';

	const onsubmit = (post: SavePost) => {
		createPost(post);
		navigate('/');
	};
	const oncancel = () => navigate('/');
</script>

<div class="container">
	<Breadcrumbs items={[{ title: 'Блог', href: '/' }, { title: 'Новый пост' }]} />

	<div class="create-post-header">
		<h1>Новый пост</h1>
		<p class="subtitle">Создайте новую запись в блоге</p>
	</div>
	<PostForm {onsubmit} {oncancel} />
	<CreatePostTips />
</div>

<style>
	.container * {
		max-width: 0 auto;
	}

	.create-post-header {
		text-align: center;
	}

	.create-post-header h1 {
		font-size: var(--font-size-3xl);
		font-weight: 700;
		margin-bottom: var(--spacing-xs);
		color: var(--color-text);
	}

	.subtitle {
		font-size: var(--font-size-lg);
		color: var(--color-text-secondary);
		margin: 0;
	}

	@media (max-width: 768px) {
		.create-post-header h1 {
			font-size: var(--font-size-2xl);
		}

		.subtitle {
			font-size: var(--font-size-md);
		}
	}

	@media (max-width: 480px) {
		.create-post-header {
			text-align: left;
		}
	}
</style>
