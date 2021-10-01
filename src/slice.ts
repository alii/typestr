import {UnionToTuple} from './utility';
import {CharIndexes} from './indexes';

type SliceNumbers<
	Indexes extends Readonly<[number, ...number[]]>,
	Maximum extends number
> = Indexes extends [infer Head, Maximum] ? Head : Indexes;

type CreateIndexTuple<Str extends string> = UnionToTuple<keyof CharIndexes<Str> & number> &
	[number, ...number[]];

export type Slice<Str extends string, Idx extends number> = SliceNumbers<
	CreateIndexTuple<Str>,
	Idx
>;

type y = Slice<'hewfsdas', 2>;
