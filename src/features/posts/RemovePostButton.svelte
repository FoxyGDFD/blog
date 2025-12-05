<script lang="ts">
	import { removePost, type Post } from '$/entities/posts';
	import { RemoveIcon } from '$/shared/icons';
	import { Modal } from '$/shared/ui';
	import { goto } from '$app/navigation';

	let { id }: Pick<Post, 'id'> = $props();
	let opened = $state<boolean>(false);
</script>

<button class="button button-danger" onclick={() => (opened = true)}>
	<RemoveIcon />
	Удалить пост
</button>

<Modal {opened}>
	<div class="remove-modal">
		<p>Вы уверены, что хотите удалить этот пост?</p>
		<div class="activities">
			<button
				class="button button-danger"
				onclick={() => {
					removePost(id);
					goto('/');
				}}>Удалить</button
			>
			<button
				class="button button-secondary"
				onclick={() => {
					opened = false;
				}}>Отмена</button
			>
		</div>
	</div>
</Modal>

<style>
	.remove-modal {
		display: flex;
		gap: 1.5rem;
		flex-direction: column;
	}
	.remove-modal p {
		font-size: var(--font-size-lg);
		font-weight: 600;
	}

	.activities {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
