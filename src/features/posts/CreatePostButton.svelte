<script>
	import { CreateIcon } from '$shared/icons';
	import { spa } from '$shared/lib/routing';
</script>

<a {@attach spa} href="/posts/new" class="button button-primary">
	<CreateIcon />
	Создать пост
</a>
