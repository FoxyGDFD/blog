<aside class="card">
	<h2 class="tips-title">
		<svg
			class="tips-icon"
			height="18px"
			width="18px"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
				id="SVGRepo_tracerCarrier"
				stroke-linecap="round"
				stroke-linejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5"></circle>
				<path d="M12 17V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"></path>
				<circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="currentColor"></circle>
			</g>
		</svg>
		Советы по написанию
	</h2>

	<ul class="tips-list">
		<li class="tip-item">
			<strong>Заголовок:</strong> Будьте краткими и ясными. Хороший заголовок привлекает внимание.
		</li>
		<li class="tip-item">
			<strong>Содержание:</strong> Используйте абзацы для разделения мыслей. Пустые строки создаются двойным
			переносом.
		</li>
		<li class="tip-item">
			<strong>Форматирование:</strong> Поддерживаются только переносы строк. Для выделения используйте
			**жирный** или *курсив* текст.
		</li>
	</ul>
</aside>

<style>
	.tips-title {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		font-size: var(--font-size-lg);
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: var(--spacing-lg);
	}

	.tips-icon {
		flex-shrink: 0;
		color: var(--color-primary);
	}

	.tips-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.tip-item {
		position: relative;
		padding-left: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
		color: var(--color-text-secondary);
		line-height: 1.6;
	}

	.tip-item:before {
		content: '💡';
		position: absolute;
		left: 0;
		top: 0;
	}

	.tip-item strong {
		color: var(--color-text);
	}

	.tip-item:last-child {
		margin-bottom: 0;
	}
</style>
