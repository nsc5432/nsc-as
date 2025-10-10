import { curry } from './fp-utils';

/**
 * map :: (a -> b) -> [a] -> [b]
 */
export const map = curry(<T, U>(fn: (x: T) => U, arr: T[]): U[] => arr.map(fn));

/**
 * filter :: (a -> Boolean) -> [a] -> [a]
 */
export const filter = curry(<T>(predicate: (x: T) => boolean, arr: T[]): T[] =>
    arr.filter(predicate)
);

/**
 * reduce :: ((a, b) -> a) -> a -> [b] -> a
 */
export const reduce = curry(
    <T, U>(fn: (acc: U, val: T) => U, init: U, arr: T[]): U => arr.reduce(fn, init)
);

/**
 * find :: (a -> Boolean) -> [a] -> a | undefined
 */
export const find = curry(<T>(predicate: (x: T) => boolean, arr: T[]): T | undefined =>
    arr.find(predicate)
);

/**
 * every :: (a -> Boolean) -> [a] -> Boolean
 */
export const every = curry(<T>(predicate: (x: T) => boolean, arr: T[]): boolean =>
    arr.every(predicate)
);

/**
 * some :: (a -> Boolean) -> [a] -> Boolean
 */
export const some = curry(<T>(predicate: (x: T) => boolean, arr: T[]): boolean =>
    arr.some(predicate)
);

/**
 * flatten :: [[a]] -> [a]
 */
export const flatten = <T>(arr: T[][]): T[] => arr.reduce((acc, val) => acc.concat(val), []);

/**
 * flatMap :: (a -> [b]) -> [a] -> [b]
 */
export const flatMap = curry(<T, U>(fn: (x: T) => U[], arr: T[]): U[] => arr.flatMap(fn));

/**
 * unique :: [a] -> [a]
 */
export const unique = <T>(arr: T[]): T[] => Array.from(new Set(arr));

/**
 * head :: [a] -> a | undefined
 */
export const head = <T>(arr: T[]): T | undefined => arr[0];

/**
 * tail :: [a] -> [a]
 */
export const tail = <T>(arr: T[]): T[] => arr.slice(1);

/**
 * last :: [a] -> a | undefined
 */
export const last = <T>(arr: T[]): T | undefined =>
    arr.length > 0 ? arr[arr.length - 1] : undefined;

/**
 * take :: Number -> [a] -> [a]
 */
export const take = curry(<T>(n: number, arr: T[]): T[] => arr.slice(0, n));

/**
 * drop :: Number -> [a] -> [a]
 */
export const drop = curry(<T>(n: number, arr: T[]): T[] => arr.slice(n));
