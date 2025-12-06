import { effect } from '@lib/signal.ts';
import type { Route } from './types.ts';
import { getMatchedRoute, params, pathname } from './index.ts';

export const routerProvider = (container: HTMLElement, routes: Route[]) => {
	effect(() => {
		const { params: currParams, route } = getMatchedRoute(
			pathname.value,
			routes.map((r) => r.path)
		);
		params.value = currParams;
		const activeRoute = routes.find((r) => r.path === route);
		container.innerHTML = '';
		if (activeRoute) container.append(activeRoute.component.render());
		else container.innerHTML = '404';
	});
};
