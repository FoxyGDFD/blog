import { navigate } from '.';

export class SpaLink extends HTMLAnchorElement {
	constructor() {
		super();
		this.addEventListener('click', (e: MouseEvent) => {
			const href = this.getAttribute('href');
			if (!href || href?.startsWith('http')) return;
			e.preventDefault();

			navigate(href);
		});
	}
}
