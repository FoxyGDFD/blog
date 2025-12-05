<script lang="ts">
	import type { Post } from '$entities/posts';
	import { EditIcon } from '$shared/icons';
	import { spa } from '$shared/lib/routing';

	let { id }: Pick<Post, 'id'> = $props();
</script>

<a {@attach spa} href={`/posts/${id}/edit`} class="button button-secondary">
	<EditIcon />
	Редактировать
</a>
