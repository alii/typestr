import {Split} from './split';
import {Join} from './join';

export type Includes<Str extends string, Find extends string> = Join<
	Split<Str, Find>,
	''
> extends Str
	? false
	: true;
