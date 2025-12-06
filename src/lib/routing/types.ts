import type { Component } from '@lib/component';

export type Route = {
	path: string;
	component: Component;
	layout?: any;
};
