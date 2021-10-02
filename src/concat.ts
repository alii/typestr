/**
 * Concatenates two strings together with an optional joiner
 */
export type Concat<
	FirstString extends string,
	SecondString extends string,
	Joiner extends string = ''
> = `${FirstString}${Joiner}${SecondString}`;
