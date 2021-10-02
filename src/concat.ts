export type Concat<
        FirstString extends string,
        SecondString extends string,
        Joiner extends string = ''
> = `${FirstString}${Joiner}${SecondString}`;
