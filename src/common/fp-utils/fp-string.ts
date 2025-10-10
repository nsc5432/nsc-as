import { curry } from './fp-utils';

/**
 * toUpper :: String -> String
 */
export const toUpper = (str: string): string => str.toUpperCase();

/**
 * toLower :: String -> String
 */
export const toLower = (str: string): string => str.toLowerCase();

/**
 * trim :: String -> String
 */
export const trim = (str: string): string => str.trim();

/**
 * split :: String -> String -> [String]
 * 예: split(',')('a,b,c') → ['a', 'b', 'c']
 */
export const split = curry((separator: string, str: string): string[] => str.split(separator));

/**
 * join :: String -> [String] -> String
 * 예: join('-')(['a', 'b', 'c']) → 'a-b-c'
 */
export const join = curry((separator: string, arr: string[]): string => arr.join(separator));

/**
 * replace :: RegExp|String -> String -> String -> String
 * 예: replace('a', 'x', 'banana') → 'bxnxnx'
 */
export const replace = curry((pattern: string | RegExp, replacement: string, str: string): string =>
    str.replace(pattern, replacement)
);

/**
 * includes :: String -> String -> Boolean
 * 예: includes('cat', 'concatenate') → true
 */
export const includes = curry((substr: string, str: string): boolean => str.includes(substr));

/**
 * startsWith :: String -> String -> Boolean
 */
export const startsWith = curry((prefix: string, str: string): boolean => str.startsWith(prefix));

/**
 * endsWith :: String -> String -> Boolean
 */
export const endsWith = curry((suffix: string, str: string): boolean => str.endsWith(suffix));

/**
 * capitalize :: String -> String
 * 예: capitalize('hello') → 'Hello'
 */
export const capitalize = (str: string): string =>
    str.length === 0 ? '' : str[0].toUpperCase() + str.slice(1).toLowerCase();

/**
 * reverse :: String -> String
 */
export const reverse = (str: string): string => str.split('').reverse().join('');
