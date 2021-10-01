import {Join, Split} from '.';

export type Replace<Str extends string, Find extends string, Replace extends string> = Join<
	Split<Str, Find>,
	Replace
>;
