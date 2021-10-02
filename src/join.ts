/**
 * Joins a string array with a given spacer. Effectively Array<string>.join
 */
export type Join<
	Tuple extends string[],
	Spacer extends string,
	Head extends string = ''
> = Tuple extends [infer F, ...infer L]
	? Head extends ''
		? Join<Extract<L, string[]>, Spacer, F & string>
		: Join<Extract<L, string[]>, Spacer, `${Head}${Spacer}${F & string}`>
	: Head;
