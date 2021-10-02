import {Join} from './join';
import {Split} from './split';

/**
 * Replaces all instances of a string inside another string
 */
export type ReplaceAll<
	Str extends string,
	Find extends string,
	Replace extends string
> = Join<Split<Str, Find>, Replace>;

/**
 * Replaces a single string instance value in another string
 */
export type Replace<
	Str extends string,
	Find extends string,
	Replace extends string
> = Str extends `${infer Before}${Find}${infer End}`
	? `${Before}${Replace}${End}`
	: Str;
