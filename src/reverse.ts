import {Join, Split} from '.';
import {Reverse as ReverseTuple} from './utility';

export type Reverse<Str extends string> = Join<ReverseTuple<Split<Str, ''>>, ''>;
