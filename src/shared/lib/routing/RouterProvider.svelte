<script lang="ts">
	import { pathname } from './navigation.svelte';
	import { getMatchedRoute, _setParams } from './navigation.svelte';
	import type { Route } from './types';

	let { routes }: { routes: Route[] } = $props();

	let active = $state<Route | null>(null);
	let Page = $derived(active?.component);
	let Layout = $derived(active?.layout);

	$effect(() => {
		const { route, params } = getMatchedRoute(
			$pathname,
			routes.map((r) => r.path)
		);

		_setParams(params); // ← обновляем приватно
		active = routes.find((r) => r.path === route) ?? null;
	});
</script>

{#if Page}
	{#if Layout}
		<Layout>
			<Page />
		</Layout>
	{:else}
		<Page />
	{/if}
{:else}
	<p>404</p>
{/if}
