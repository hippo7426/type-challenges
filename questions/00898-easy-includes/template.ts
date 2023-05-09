// A1: type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

type Equal<X, Y> =
  (<T>() => T extends X ? 1 : 2) extends
  (<T>() => T extends Y ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> =
  T['length'] extends 0 ? false : // recursion terminal case
    T extends [infer First, ...infer Rest] ? // recursion decomposition
      Equal<First, U> extends true ? // recursive test
        true : Includes<Rest, U> : never // actual recursion
