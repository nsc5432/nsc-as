import { curry } from './fp-utils';

/** 객체에서 프로퍼티 읽기 */
export const prop = curry(<T extends object, K extends keyof T>(key: K, obj: T): T[K] => obj[key]);

/** 특정 프로퍼티 값이 같은지 비교 */
export const propEq = curry(
    <T extends object, K extends keyof T>(key: K, value: T[K], obj: T) => obj[key] === value
);

/** 객체에 프로퍼티 추가 */
export const assoc = curry(<T extends object, K extends string, V>(key: K, value: V, obj: T) => ({
    ...obj,
    [key]: value,
}));
