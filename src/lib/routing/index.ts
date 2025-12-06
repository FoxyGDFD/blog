import { signal } from '@lib/signal';

export * from './Link';

export const pathname = signal(window.location.pathname);
export const params = signal<Record<string, string>>({});
export const navigate = (url: string, options?: { replace: boolean }) => {
	if (options?.replace) window.history.replaceState({}, '', url);
	else window.history.pushState({}, '', url);
	pathname.value = url;
};

export const getMatchedRoute = (pathname: string, routes: string[]) => {
	const pathnameParts = pathname.split('/').filter(Boolean);

	for (const route of routes) {
		const routeParts = route.split('/').filter(Boolean);
		if (pathnameParts.length !== routeParts.length) continue;

		const tempParams: Record<string, string> = {};
		let isMatch = true;

		for (let i in pathnameParts) {
			if (routeParts[i].startsWith(':')) {
				tempParams[routeParts[i].slice(1)] = decodeURIComponent(
					pathnameParts[i]
				);
			} else if (routeParts[i] !== pathnameParts[i]) {
				isMatch = false;
				break;
			}
		}

		if (isMatch) {
			return { route, params: tempParams };
		}
	}

	return { route: null, params: {} };
};

window.addEventListener('popstate', () => {
	pathname.value = window.location.pathname;
});
