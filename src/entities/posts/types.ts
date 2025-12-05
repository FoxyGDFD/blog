import { type InferInput } from 'valibot';
import type { PostSchema, SavePostSchema } from './schemas';

export type Post = InferInput<typeof PostSchema>;
export type SavePost = InferInput<typeof SavePostSchema>;
