import {Join} from './join';
import {Split} from './split';

export type ReplaceAll<
	Str extends string,
	Find extends string,
	Replace extends string
> = Join<Split<Str, Find>, Replace>;

export type Replace<
	Str extends string,
	Find extends string,
	Replace extends string
> = Str extends `${infer Before}${Find}${infer End}`
	? `${Before}${Replace}${End}`
	: Str;
