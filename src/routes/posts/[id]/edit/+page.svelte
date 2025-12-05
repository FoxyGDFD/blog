<script lang="ts">
	import { Breadcrumbs } from '$/shared/ui';
	import { PostForm } from '$/features/posts';
	import { page } from '$app/stores';
	import { posts, updatePost, type SavePost, type Post } from '$/entities/posts';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let post = $state<Post | null>(null);
	let error = $state<string | null>(null);

	// создаём редактируемое состояние
	let createPostState = $state<SavePost>({
		title: '',
		content: ''
	});

	const { id } = $page.params;

	onMount(() => {
		const foundPost = $posts.find((p) => p.id === id);

		if (!foundPost) {
			error = 'Пост не найден';
			return;
		}

		post = foundPost;

		// заполняем bindable объект
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
	<div class="error">
		<h1>{error}</h1>
		<button onclick={() => goto('/')}>Вернуться</button>
	</div>
{:else}
	<div class="page">
		<Breadcrumbs
			items={[
				{ title: 'Блог', href: '/' },
				{ title: post?.title!, href: `/posts/${post?.id!}` },
				{ title: 'Редактирование' }
			]}
		/>

		<div class="create-post-header">
			<h1>Изменить пост</h1>
		</div>

		<PostForm bind:initialData={createPostState} {onsubmit} {oncancel} />
	</div>
{/if}

<style>
	.error {
		text-align: center;
		margin-top: 4rem;
	}
	.error h1 {
		color: var(--color-danger);
		margin-bottom: 1rem;
	}
	.error button {
		padding: 0.5rem 1rem;
	}
</style>
