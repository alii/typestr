import {Split} from './split';
import {Indices} from './utility';

export type CharIndexes<Str extends string> = {
	[Idx in Indices<Split<Str, ''>> & number]: Split<Str, ''>[Idx];
};
