import { type InferInput } from 'valibot';
import type { PostSchema, SavePostSchema } from './schemas';

export type Post = InferInput<typeof PostSchema>;
export type SavePost = InferInput<typeof SavePostSchema>;

export type SavePostValidationError = {
	success: boolean;
	errors: Record<keyof SavePost, string>;
};

export type IPostRepository = {
	posts: () => Post[];
	createPost: (postInfo: SavePost) => null | SavePostValidationError['errors'];
	updatePost: (
		changingId: Post['id'],
		postInfo: SavePost
	) => null | SavePostValidationError['errors'];
	removePost: (deletingId: Post['id']) => void;
};
