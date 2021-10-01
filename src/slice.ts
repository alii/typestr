import {CharIndexTuple} from './indexes';
import {FlipTuple, PartTuple} from './utility';

export type Slice<Str extends string, Idx extends number> = FlipTuple<
	PartTuple<FlipTuple<CharIndexTuple<Str>>, Idx>
>;

type y = Slice<'hewfsdas', 2>;
