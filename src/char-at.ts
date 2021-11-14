import {Split} from './split';
import {Indices} from './utility';

/**
 * Gets a char at a given index in a string
 */
export type CharAt<
	Str extends string,
	Char extends Indices<Split<Str, ''>>
> = Split<Str, ''>[Char & keyof Split<Str, ''>];
