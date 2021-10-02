export type Writable<T> = {-readonly [K in keyof T]: T[K]};

export type Prepend<Tuple extends unknown[], Addend> = ((
	addend: Addend,
	...rest: Tuple
) => unknown) extends (..._: infer Result) => unknown
	? Result
	: Tuple;

export type TupleHasLength<Tuple, IfTrue = 1, IfFalse = 0> = Tuple extends [
	unknown,
	...unknown[]
]
	? IfTrue
	: IfFalse;

export type FlipTuple<
	Tuple extends unknown[],
	Prefix extends unknown[] = []
> = {
	0: Prefix;
	1: ((..._: Tuple) => unknown) extends (
		addend: infer First,
		...rest: infer Next
	) => unknown
		? FlipTuple<Next, Prepend<Prefix, First>>
		: never;
}[TupleHasLength<Tuple>];

export type PartTuple<Tuple extends unknown[], Part> = Tuple extends [
	infer First,
	...infer Rest
]
	? First extends Part
		? []
		: PartTuple<Rest, Part>
	: [];

export type Indices<T extends {length: number}> = Exclude<
	Partial<T>['length'],
	T['length']
>;

type UnionToIntersection<U> = (
	U extends never ? never : (arg: U) => never
) extends (arg: infer I) => void
	? I
	: never;

export type UnionToTuple<T> = UnionToIntersection<
	T extends never ? never : (t: T) => T
> extends (_: never) => infer W
	? [...UnionToTuple<Exclude<T, W>>, W]
	: [];
