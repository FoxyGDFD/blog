<script lang="ts">
	import { safeParse } from 'valibot';
	import { SavePostSchema } from '$entities/posts';
	import type { SavePost } from '$entities/posts';

	let {
		initialData = $bindable({
			title: '',
			content: ''
		}),
		onsubmit,
		oncancel
	}: {
		initialData?: SavePost;
		onsubmit: (data: SavePost) => void;
		oncancel?: () => void;
	} = $props();

	let errors = $state({
		title: '',
		content: ''
	});

	const handleSubmit = (e: Event) => {
		e.preventDefault();

		const parsed = safeParse(SavePostSchema, initialData);

		if (!parsed.success) {
			errors = {
				title: parsed.issues.find((i) => i.path?.[0].key === 'title')?.message ?? '',
				content: parsed.issues.find((i) => i.path?.[0].key === 'content')?.message ?? ''
			};
			return;
		}

		onsubmit(parsed.output);
	};
</script>

<form class="card" onsubmit={handleSubmit}>
	<div class="field" data-error={!!errors.title}>
		<label for="title">Заголовок <span>*</span></label>

		<input
			id="title"
			name="title"
			bind:value={initialData.title}
			placeholder="Введите заголовок..."
			data-error={!!errors.title}
		/>

		<div class="field-footer">
			<p class="counter">{initialData.title.length}/100</p>
			{#if errors.title}
				<p>{errors.title}</p>
			{/if}
		</div>
	</div>

	<div class="field" data-error={!!errors.content}>
		<label for="content">Содержание <span>*</span></label>

		<textarea
			id="content"
			name="content"
			bind:value={initialData.content}
			rows="10"
			placeholder="Текст поста..."
			data-error={!!errors.content}
		></textarea>

		<div class="field-footer">
			<p class="counter">{initialData.content.length}/5000</p>
			{#if errors.content}
				<p>{errors.content}</p>
			{/if}
		</div>
	</div>

	<div class="actions">
		<button type="button" class="button button-secondary" onclick={oncancel}> Отмена </button>
		<button type="submit" class="button button-primary">Сохранить</button>
	</div>
</form>

<style>
	.field {
		margin-bottom: 1.5rem;
	}

	label {
		display: block;
		margin-bottom: 0.4rem;
		font-weight: 600;
		color: var(--color-text);
	}

	label span {
		color: var(--color-danger);
	}

	input,
	textarea {
		width: 100%;
		padding: 0.75rem;
		background: var(--color-bg);
		border: 1px solid var(--color-bg);
		border-radius: 8px;
		font-size: 1rem;
		color: var(--color-text);
		font-family: var(--font-body);
		transition:
			border-color 0.15s,
			box-shadow 0.15s;
		resize: vertical;
	}

	input:focus,
	textarea:focus {
		border-color: var(--color-theme-1);
		box-shadow: 0 0 0 3px rgba(255, 62, 0, 0.25);
		outline: none;
	}

	input[data-error='true'],
	textarea[data-error='true'] {
		border-color: var(--color-danger);
		background: rgba(239, 68, 68, 0.05);
		color: var(--color-danger);
	}

	input[data-error='true']:focus,
	textarea[data-error='true']:focus {
		box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.25);
		border-color: var(--color-danger);
	}

	.field-footer {
		display: flex;
		justify-content: space-between;
		margin-top: 0.35rem;
		font-size: 0.85rem;
	}

	.counter {
		opacity: 0.6;
		color: var(--color-text);
	}

	.field[data-error='true'] .counter {
		color: var(--color-danger);
		opacity: 1;
	}

	.field[data-error='true'] p {
		color: var(--color-danger);
		margin: 0;
	}

	.actions {
		display: flex;
		justify-content: flex-end;
		gap: 1.5rem;
	}

	@media (max-width: 640px) {
		form {
			padding: 1.25rem;
			margin: 0;
		}

		.actions {
			flex-direction: column;
		}

		.actions > * {
			width: 100%;
		}
	}

	@media (prefers-color-scheme: dark) {
		input,
		textarea {
			background: rgba(255, 255, 255, 0.05);
			border-color: rgba(255, 255, 255, 0.12);
		}
	}
</style>
