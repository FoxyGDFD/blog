import { readonly, writable } from 'svelte/store';
import type { SavePost, Post } from './types';

const postsState = writable<Post[]>(
	[
		// {
		// 	id: 'post_001',
		// 	title: 'Новости в мире технологий',
		// 	content: 'Искусственный интеллект продолжает развиваться семимильными шагами...',
		// 	createdAt: Date.now() - 86400000 * 2, // 2 дня назад
		// 	updatedAt: Date.now() - 86400000 // 1 день назад
		// },
		// {
		// 	id: 'post_002',
		// 	title: 'Советы по продуктивности',
		// 	content: 'Вот 5 способов повысить вашу продуктивность на работе и в личных проектах.',
		// 	createdAt: Date.now() - 86400000 * 5, // 5 дней назад
		// 	updatedAt: Date.now() - 86400000 * 5
		// },
		// {
		// 	id: 'post_003',
		// 	title: 'Обзор нового фреймворка',
		// 	content: 'Сегодня мы рассмотрим новый JavaScript-фреймворк и его основные возможности.',
		// 	createdAt: Date.now() - 86400000 * 7, // неделю назад
		// 	updatedAt: Date.now() - 86400000 * 3 // обновлен 3 дня назад
		// }
	],
	(set) => {
		const posts = JSON.parse(localStorage.getItem('posts') ?? '[]') as Post[];
		set(posts);
	}
);
postsState.subscribe((val) => localStorage.setItem('posts', JSON.stringify(val)));

export const posts = readonly<Post[]>(postsState);

export const createPost = (postInfo: SavePost) => {
	postsState.update((posts) => [
		...posts,
		{
			...postInfo,
			id: crypto.randomUUID(),
			createdAt: Date.now(),
			updatedAt: Date.now()
		}
	]);
};

export const updatePost = (changingId: Post['id'], postInfo: SavePost) => {
	postsState.update((posts) =>
		posts.map((post) =>
			post.id === changingId
				? {
						...post,
						...postInfo,
						updatedAt: Date.now()
					}
				: post
		)
	);
};

export const removePost = (deletingId: Post['id']) => {
	postsState.update((posts) => posts.filter(({ id }) => id !== deletingId));
};
