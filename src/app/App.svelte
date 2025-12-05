<script lang="ts">
	import ViewPost from '$pages/ViewPost.svelte';
	import MainPage from '$pages/Main.svelte';
	import RouterProvider from '$shared/lib/routing/RouterProvider.svelte';
	import EditPost from '$pages/EditPost.svelte';
	import NewPost from '$pages/NewPost.svelte';
	import Layout from '$pages/Layout.svelte';

	let routes = [
		{
			path: '/',
			component: MainPage,
			layout: Layout
		},
		{
			path: '/posts/new',
			component: NewPost,
			layout: Layout
		},
		{
			path: '/posts/:id',
			component: ViewPost,
			layout: Layout
		},
		{
			path: '/posts/:id/edit',
			component: EditPost,
			layout: Layout
		}
	];
</script>

<RouterProvider {routes} />
