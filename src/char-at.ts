import {Split} from './split';

export type CharAt<Str extends string, Char extends number> = Split<
	Str,
	''
>[Char];
