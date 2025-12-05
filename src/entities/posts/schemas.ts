import { object, string, minLength, maxLength, number, pipe } from 'valibot';

export const PostSchema = object({
	id: string(),
	title: pipe(
		string(),
		minLength(1, 'Заголовок обязателен'),
		maxLength(100, 'Максимум 100 символов')
	),
	content: pipe(
		string(),
		minLength(1, 'Заголовок обязателен'),
		maxLength(5000, 'Максимум 5000 символов')
	),
	createdAt: number(),
	updatedAt: number()
});

export const SavePostSchema = object({
	title: pipe(
		string(),
		minLength(1, 'Заголовок обязателен'),
		maxLength(100, 'Максимум 100 символов')
	),
	content: pipe(
		string(),
		minLength(1, 'Заголовок обязателен'),
		maxLength(5000, 'Максимум 5000 символов')
	)
});
