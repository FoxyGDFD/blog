<article class="no-post-container">
	<div class="card no-post">
		<h2>Такого поста не существует</h2>
		<a href="/" class="button button-primary">Вернуться на главную</a>
	</div>
</article>

<style>
	.no-post-container {
		display: grid;
		place-items: center;
		width: 100%;
		min-height: 100vh;
	}

	.no-post {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		justify-content: center;
		align-items: center;
		padding: var(--spacing-xl);
	}

	@media (max-width: 480px) {
		.no-post {
			padding: var(--spacing-md);
			background-color: var(--color-surface);
			margin-bottom: var(--spacing-md);
			border-radius: var(--radius-md);
		}
	}
</style>
