export type Split<
	Str extends string,
	Splitter extends string,
	Result extends string[] = []
> = Str extends `${infer Before}${Splitter}${infer After}`
	? Split<After, Splitter, [...Result, Before]>
	: Str extends ''
	? Result
	: [...Result, Str];
