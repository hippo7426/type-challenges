// A1: type MyAwaited<T> = T extends Promise<infer R> ? R extends Promise<any> ? MyAwaited<R> : R : never

type Thenable<T> = {
  then: (onfulfilled: (arg: T) => any) => any
}

type MyAwaited<T extends Thenable<any> | Promise<any>> = T extends Promise<infer R> ? R extends Promise<any> ? MyAwaited<R> : R : T extends Thenable<infer R> ? R : never

