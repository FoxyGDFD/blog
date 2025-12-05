import { navigate } from './navigation.svelte';

export function spa(node: HTMLAnchorElement) {
	function onClick(e: MouseEvent) {
		if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
			return;
		}

		const href = node.getAttribute('href');

		if (!href || href.startsWith('http')) return;

		e.preventDefault();
		navigate(href);
	}

	node.addEventListener('click', onClick);
	return () => node.removeEventListener('click', onClick);
}
