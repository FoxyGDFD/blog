<script lang="ts">
	import { Breadcrumbs, NoPostWidget } from '$shared/ui';
	import { PostForm } from '$features/posts';
	import { page } from '$app/stores';
	import { posts, updatePost, type SavePost, type Post } from '$entities/posts';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let post = $state<Post | null>(null);
	let error = $state<boolean>(false);

	let createPostState = $state<SavePost>({
		title: '',
		content: ''
	});

	const { id } = $page.params;

	onMount(() => {
		const foundPost = $posts.find((p) => p.id === id);

		if (!foundPost) {
			error = true;
			return;
		}

		post = foundPost;

		createPostState.title = post.title;
		createPostState.content = post.content;
	});

	const onsubmit = (draft: SavePost) => {
		updatePost(id!, draft);
		goto(`/posts/${id}`);
	};

	const oncancel = () => goto(`/posts/${id}`);
</script>

{#if error}
	<NoPostWidget />
{:else}
	<div class="container">
		<Breadcrumbs
			items={[
				{ title: 'Блог', href: '/' },
				{ title: post?.title!, href: `/posts/${post?.id!}` },
				{ title: 'Редактирование' }
			]}
		/>
		<h1>Изменить пост</h1>
		<PostForm bind:initialData={createPostState} {onsubmit} {oncancel} />
	</div>
{/if}

<style>
	.container * {
		max-width: 0 auto;
	}

	h1 {
		text-align: center;
		font-size: var(--font-size-3xl);
		font-weight: 700;
		margin-bottom: var(--spacing-xs);
		color: var(--color-text);
	}

	@media (max-width: 768px) {
		h1 {
			font-size: var(--font-size-2xl);
		}
	}
</style>
