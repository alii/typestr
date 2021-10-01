import {Split} from './split';
import {Indices, UnionToTuple} from './utility';

export type CharIndexes<Str extends string> = {
	[Idx in Indices<Split<Str, ''>> & number]: Split<Str, ''>[Idx];
};

export type CharIndexTuple<Str extends string> = Extract<
	UnionToTuple<keyof CharIndexes<Str> & number>,
	number[]
>;
