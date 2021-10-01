export type Writable<T> = {-readonly [K in keyof T]: T[K]};

export type Prepend<Tuple extends unknown[], Addend> = ((
	addend: Addend,
	...rest: Tuple
) => unknown) extends (..._: infer Result) => unknown
	? Result
	: Tuple;

export type FlipTuple<Tuple extends unknown[], Prefix extends unknown[] = []> = {
	0: Prefix;
	1: ((..._: Tuple) => unknown) extends (addend: infer First, ...rest: infer Next) => unknown
		? FlipTuple<Next, Prepend<Prefix, First>>
		: never;
}[Tuple extends [unknown, ...unknown[]] ? 1 : 0];
