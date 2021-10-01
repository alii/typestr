import {Join} from './join';
import {Split} from './split';
import {Reverse as ReverseTuple} from './utility';

export type Reverse<Str extends string> = Join<ReverseTuple<Split<Str, ''>>, ''>;
