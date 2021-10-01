import {Join} from './join';
import {Split} from './split';

export type Replace<Str extends string, Find extends string, Replace extends string> = Join<
	Split<Str, Find>,
	Replace
>;
