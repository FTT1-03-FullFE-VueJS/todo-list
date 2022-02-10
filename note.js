/**
 * Array:
 * --- map
 * --- filter
 */

/**
 * export: trong một file có thế có nhiều export
 * export default: Trong một file có có duy nhất một export default
 */

/**
 * Khi dùng export
 * file: export.js
 * export function fun1();
 * export function fun2();
 * export function fun3();
 *
 * file: app.js
 * --> import { fun1, fun2, fun3 } from 'export.js'
 */

/**
 * Khi dùng export default
 * file: export.js
 * export default function fun1();
 *
 * file: app.js
 * --> import fun1 from 'export.js'
 */


/**
 * Vừa có export và vừa export default
 * file: export.js
 * export function subFun1();
 * export function subFun2();
 * export default function fun1();
 *
 * file: app.js
 * --> import fun1, { subFun1, subFun2 } from 'export.js'
 */