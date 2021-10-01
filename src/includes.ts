export type Includes<Str extends string, Find extends string> = Str extends `${infer F}`
	? F extends Find
		? true
		: false
	: false;
