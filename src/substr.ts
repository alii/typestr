type Head<
	Str extends string,
	End extends number,
	Result extends string = '',
	Counter extends Array<0> = []
> = Counter['length'] extends End
	? Result
	: Str extends `${infer FirstChar}${infer Rest}`
	? Head<Rest, End, `${Result}${FirstChar}`, [0, ...Counter]>
	: never;

type Tail<
	Str extends string,
	Start extends number,
	Counter extends Array<0> = []
> = Counter['length'] extends Start
	? Str
	: Str extends `${string}${infer N}`
	? Tail<N, Start, [0, ...Counter]>
	: never;

/**
 * Pulls a substring at a start and end index.
 * @warning This requres the End to be passed
 */
export type Substr<
	Str extends string,
	Start extends number,
	End extends number
> = Head<Tail<Str, Start>, End>;
