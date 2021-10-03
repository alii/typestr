import {Split} from './split';

export type Length<Str extends string> = Split<Str, ''>['length'];
