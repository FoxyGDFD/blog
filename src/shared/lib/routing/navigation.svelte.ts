import { readonly, writable } from 'svelte/store';

let pathnameState = writable<string>(window.location.pathname);
pathnameState.subscribe((v) => console.log(v));
export let pathname = readonly(pathnameState);
let paramsState = writable<Record<string, string>>({});
export let params = readonly(paramsState);

export const _setParams = (v: Record<string, string>) => paramsState.set(v);
export const navigate = (url: string) => {
	window.history.pushState({}, '', url);
	pathnameState.set(url);
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
				tempParams[routeParts[i].slice(1)] = decodeURIComponent(pathnameParts[i]);
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
	pathnameState.set(window.location.pathname);
});
