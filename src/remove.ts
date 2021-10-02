import {Replace, ReplaceAll} from './replace';

/**
 * Removes a string value from a string
 */
export type Remove<Str extends string, Removal extends string> = Replace<
	Str,
	Removal,
	''
>;

/**
 * Remove all instances of a string inside another string
 */
export type RemoveAll<Str extends string, Removal extends string> = ReplaceAll<
	Str,
	Removal,
	''
>;
