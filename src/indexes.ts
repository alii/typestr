import {Split} from './split';
import {Indices, UnionToTuple} from './utility';

/**
 * Converts each character in a string into a Record of keys being the index and values being each char
 */
export type CharIndexes<Str extends string> = {
	[Idx in Indices<Split<Str, ''>> & number]: Split<Str, ''>[Idx];
};

/**
 * Generates a tuple of each index of a character in a string. Useful for iteration
 */
export type CharIndexTuple<Str extends string> = Extract<
	UnionToTuple<keyof CharIndexes<Str>>,
	number[]
>;
