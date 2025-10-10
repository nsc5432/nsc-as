import { curry } from './fp-utils';

/**
 * now :: () -> Date
 */
export const now = (): Date => new Date();

/**
 * formatDate :: String -> Date -> String
 * 간단한 포맷 예시 ('YYYY-MM-DD', 'YYYY/MM/DD HH:mm:ss')
 */
export const formatDate = curry((format: string, date: Date): string => {
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    const hh = String(date.getHours()).padStart(2, '0');
    const mi = String(date.getMinutes()).padStart(2, '0');
    const ss = String(date.getSeconds()).padStart(2, '0');

    return format
        .replace(/YYYY/g, yyyy.toString())
        .replace(/MM/g, mm)
        .replace(/DD/g, dd)
        .replace(/HH/g, hh)
        .replace(/mm/g, mi)
        .replace(/ss/g, ss);
});

/**
 * addDays :: Number -> Date -> Date
 */
export const addDays = curry((days: number, date: Date): Date => {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
});

/**
 * addMonths :: Number -> Date -> Date
 */
export const addMonths = curry((months: number, date: Date): Date => {
    const newDate = new Date(date);
    newDate.setMonth(date.getMonth() + months);
    return newDate;
});

/**
 * addYears :: Number -> Date -> Date
 */
export const addYears = curry((years: number, date: Date): Date => {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear() + years);
    return newDate;
});

/**
 * diffDays :: Date -> Date -> Number
 * (a - b)의 일수 차이
 */
export const diffDays = curry((a: Date, b: Date): number => {
    const diff = a.getTime() - b.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24));
});

/**
 * isBefore :: Date -> Date -> Boolean
 */
export const isBefore = curry((a: Date, b: Date): boolean => a.getTime() < b.getTime());

/**
 * isAfter :: Date -> Date -> Boolean
 */
export const isAfter = curry((a: Date, b: Date): boolean => a.getTime() > b.getTime());

/**
 * isSameDay :: Date -> Date -> Boolean
 */
export const isSameDay = curry(
    (a: Date, b: Date): boolean =>
        a.getFullYear() === b.getFullYear() &&
        a.getMonth() === b.getMonth() &&
        a.getDate() === b.getDate()
);
