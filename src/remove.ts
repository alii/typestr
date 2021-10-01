import {Replace} from './replace';

export type Remove<Str extends string, Removal extends string> = Replace<
	Str,
	Removal,
	''
>;
