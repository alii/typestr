import {Split} from './split';

/**
 * Gets a char at a given index in a string
 */
export type CharAt<Str extends string, Char extends number> = Split<
	Str,
	''
>[Char];
