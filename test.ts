import {Utility} from './src';

type MYCounter = Utility.Counter;
type Result = MYCounter['incr']['incr']['incr']['decr']['val'];

declare const x: Result;

export {x};
