import {CharIndexTuple} from './indexes';
import {PartTuple} from './utility';

export type Slice<Str extends string, Idx extends number> = PartTuple<
	CharIndexTuple<Str>,
	Idx
>;

type y = Slice<'hewfsdas', 2>;
