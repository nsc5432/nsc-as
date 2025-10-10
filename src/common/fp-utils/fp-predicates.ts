// fp-predicate.ts
import { curry } from './fp-utils';

/** === 비교 */
export const eq = curry(<T>(a: T, b: T): boolean => a === b);

/** !== 비교 */
export const neq = curry(<T>(a: T, b: T): boolean => a !== b);

/** > 비교 */
export const gt = curry((a: number, b: number): boolean => b > a);

/** >= 비교 */
export const gte = curry((a: number, b: number): boolean => b >= a);

/** < 비교 */
export const lt = curry((a: number, b: number): boolean => b < a);

/** <= 비교 */
export const lte = curry((a: number, b: number): boolean => b <= a);

/** null 또는 undefined 여부 */
export const isNil = (value: unknown): value is null | undefined =>
    value === null || value === undefined;

/** not (불리언 반전) */
export const not = (value: unknown): boolean => !value;

/** and (논리 AND) */
export const and = curry((a: boolean, b: boolean): boolean => a && b);

/** or (논리 OR) */
export const or = curry((a: boolean, b: boolean): boolean => a || b);
