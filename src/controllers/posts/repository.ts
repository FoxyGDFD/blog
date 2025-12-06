import { safeParse } from 'valibot';
import {
	SavePostSchema,
	type IPostRepository,
	type Post,
	type SavePost,
	type SavePostValidationError
} from '@domain/posts';

class PostsRepository implements IPostRepository {
	_posts: Post[];

	constructor(initValue: Post[]) {
		this._posts = initValue ?? [];
	}

	posts() {
		return this._posts;
	}

	_validate(postToSave: SavePost): SavePostValidationError {
		const parsed = safeParse(SavePostSchema, postToSave);
		const result = {
			errors: {
				title: '',
				content: ''
			},
			success: true
		};

		if (!parsed.success) {
			result.errors.title =
				parsed.issues.find((i) => i.path?.[0].key === 'title')?.message ?? '';
			result.errors.content =
				parsed.issues.find((i) => i.path?.[0].key === 'content')?.message ?? '';
			result.success = false;
		}
		return result;
	}

	createPost(postInfo: SavePost) {
		const { success, errors } = this._validate(postInfo);
		if (!success) return errors;

		this._posts.push({
			...postInfo,
			id: crypto.randomUUID(),
			createdAt: Date.now(),
			updatedAt: Date.now()
		});

		return null;
	}

	updatePost(changingId: Post['id'], postInfo: SavePost) {
		const { success, errors } = this._validate(postInfo);
		if (!success) return errors;

		this._posts.map((post) =>
			post.id === changingId
				? {
						...post,
						...postInfo,
						updatedAt: Date.now()
					}
				: post
		);

		return null;
	}

	removePost(deletingId: Post['id']) {
		this._posts.filter(({ id }) => id !== deletingId);
	}
}

export const postRepository = new PostsRepository([
	{
		id: 'post_001',
		title: 'Новости в мире технологий',
		content:
			'Искусственный интеллект продолжает развиваться семимильными шагами...',
		createdAt: Date.now() - 86400000 * 2,
		updatedAt: Date.now() - 86400000
	},
	{
		id: 'post_002',
		title: 'Советы по продуктивности',
		content:
			'Вот 5 способов повысить вашу продуктивность на работе и в личных проектах.',
		createdAt: Date.now() - 86400000 * 5,
		updatedAt: Date.now() - 86400000 * 5
	},
	{
		id: 'post_003',
		title: 'Обзор нового фреймворка',
		content:
			'Сегодня мы рассмотрим новый JavaScript-фреймворк и его основные возможности.',
		createdAt: Date.now() - 86400000 * 7,
		updatedAt: Date.now() - 86400000 * 3
	}
]);
