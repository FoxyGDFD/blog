export type Effect = () => void;
export type Signal<T> = {
	value: T;
	subscribe: (fn: Effect) => Set<Effect>;
};

let currentEffect: Effect | null = null;

export const signal = <T>(initialValue: T) => {
	let value: T = initialValue;

	const subscribers = new Set<Effect>();

	const subscribe = (fn: Effect) => subscribers.add(fn);

	return {
		get value() {
			if (currentEffect) subscribe(currentEffect);

			return value;
		},
		set value(newValue: T) {
			if (value === newValue) return;
			value = newValue;
			subscribers.forEach((fn) => fn());
		},
		subscribe
	};
};

export const effect = (fn: Effect): void => {
	currentEffect = fn;
	fn();
	currentEffect = null;
};

export const computed = <T>(fn: () => T): Signal<T> => {
	const value = signal(fn());

	effect(fn);

	return value;
};
