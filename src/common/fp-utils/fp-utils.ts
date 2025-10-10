/**
 * 커링 (Currying)
 * 다중 인자를 받는 함수를 하나의 인자만 받는 함수들의 체인으로 변환
 */
export const curry = <A extends unknown[], R>(fn: (...args: A) => R) => {
    const curried = (...args: unknown[]): unknown => {
        return args.length >= fn.length
            ? fn(...(args as A))
            : (...rest: unknown[]) => curried(...args, ...rest);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return curried as any;
};

/**
 * 부분 적용 (Partial Application)
 * 일부 인자를 미리 적용하여 새로운 함수를 생성
 */
export const partial = <P extends unknown[], L extends unknown[], R>(
    fn: (...args: [...P, ...L]) => R,
    ...presetArgs: P
) => {
    return (...laterArgs: L): R => fn(...presetArgs, ...laterArgs);
};

/**
 * 함수 합성 (Compose)
 * 오른쪽 → 왼쪽으로 함수를 결합
 */
export function compose<T>(...fns: Array<(arg: T) => T>) {
    return (value: T): T => fns.reduceRight((acc, fn) => fn(acc), value);
}

/**
 * 파이프 (Pipe)
 * 왼쪽 → 오른쪽으로 함수를 결합
 */
export function pipe<T>(...fns: Array<(arg: T) => T>) {
    return (value: T): T => fns.reduce((acc, fn) => fn(acc), value);
}

/**
 * 불변 업데이트 (Immutable Update)
 */
export const update = <T extends object, U extends Partial<T>>(obj: T, updates: U): T => ({
    ...obj,
    ...updates,
});

/**
 * 불변 배열 추가 (Immutable Push)
 */
export const append = <T>(arr: readonly T[], item: T): T[] => [...arr, item];

/**
 * 불변 배열 제거 (Immutable Remove)
 */
export const remove = <T>(arr: readonly T[], predicate: (item: T) => boolean): T[] =>
    arr.filter((item) => !predicate(item));

/**
 * tap - 파이프 내부에서 중간 디버깅용
 */
export const tap =
    <T>(fn: (value: T) => void) =>
    (value: T): T => {
        fn(value);
        return value;
    };

/**
 * once - 한 번만 실행되는 함수
 */
export const once = <Args extends unknown[], R>(
    fn: (...args: Args) => R
): ((...args: Args) => R) => {
    let called = false;
    let result: R;
    return (...args: Args): R => {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
};

/**
 * memoize - 결과 캐싱
 */
export const memoize = <Args extends unknown[], R>(
    fn: (...args: Args) => R
): ((...args: Args) => R) => {
    const cache = new Map<string, R>();
    return (...args: Args): R => {
        const key = JSON.stringify(args);
        const cached = cache.get(key);
        if (cached !== undefined) return cached;
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
};

/**
 * when / ifElse
 */
export const ifElse =
    <T, R>(condition: (x: T) => boolean, onTrue: (x: T) => R, onFalse: (x: T) => R) =>
    (x: T): R =>
        condition(x) ? onTrue(x) : onFalse(x);
