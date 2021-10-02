// Note: this file is exported in ./utilty.ts as it's not a string type,
// but I felt it qualifies to exist in it's own file

// Most memory efficient way to increment as this takes up
// a lot of ram, especially when you are iterating a lot of times.
type V = 0;

/**
 * Utility type for an incremental counter. Counters start at 0.
 * This works adding a new item to a tuple every time we want to increment.
 *
 * We are then able to fetch the current value of the counter by accessing
 * the length fo the tuple which would be incremeneted every time we push
 * a new item to it.
 *
 * This is also a fun learning resource, as this is how the substring type
 * was implemented in this library.
 *
 * Counting is hard in TypeScript but people can get creative when you are in
 * a restrictive environment.
 *
 * @example
 * type MyCounter = Counter;
 * type InitialValue = MyCounter['val'];
 * type IncrementedCounter = MyCounter['incr'];
 * type IncrementedValue = IncrementedCounter['val'];
 */
export type Counter<T extends V[] = []> = {
	incr: Counter<[...T, V]>;
	decr: T extends [V, ...infer Rest] ? Counter<Rest & V[]> : Counter;
	val: T['length'];
};
