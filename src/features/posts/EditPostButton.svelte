<script lang="ts">
	import type { Post } from '$entities/posts';
	import { EditIcon } from '$shared/icons';

	let { id }: Pick<Post, 'id'> = $props();
</script>

<a href={`/posts/${id}/edit`} class="button button-secondary">
	<EditIcon />
	Редактировать
</a>
