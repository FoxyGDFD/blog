/// <reference types="@sveltejs/kit" />

declare module '*.svelte' {
	import type { SvelteComponentTyped } from 'svelte';
	export default class Component extends SvelteComponentTyped<any, any, any> {}
}

declare module '*.svelte';

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
