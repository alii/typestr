import {Join} from './join';
import {Split} from './split';
import {FlipTuple} from './utility';

export type Reverse<Str extends string> = Join<FlipTuple<Split<Str, ''>>, ''>;
