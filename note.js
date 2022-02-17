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

// ===========================================================================
/**
 * Hoisting strong javascript
 * -> Có thể được hỏi lúc phổng vấn
 * var
 * let
 * const
 */

/**
 * vd: 1
 */
// Đề
// console.log(name); // undefined
// console.log(age); // error: age is not defined
// var name = 20;

// Javascript
// var name; // <=> var name = undefined
// console.log(name);// undefined
// console.log(age);
// name = 20;

// console.log(name); // 20, => error: Cannot access 'name' before initialization
// console.log(age); // error: age is not defined
// let name = 20;

// console.log(name); // 20, => error: Cannot access 'name' before initialization
// console.log(age); // error: age is not defined
// name = 20;

// console.log(getFullName()); // pham dinh hung

// function getFullName() {
//   return 'pham dinh hung';
// }

// //
// function getFullName() {
//   return 'pham dinh hung';
// }

// console.log(getFullName()); // pham dinh hung

// ==============================================

// let users = ['hung', 'nhan', 'thuy', 'ngan']; // 0011a
// b1: cấp cho biến users một bộ nhớ trên thanh RAM trên máy tính
// -------|-------|--------|-------
//  0011a   0011b   0011c    0011d
//  users
// console.log(helloUser(users[0])); // hello hung

// let customers = users; // địa chỉ của biến customers bằng với địa chỉ của biến users

// 0011a = ['hung', 'nhan', 'thuy', 'ngan'];

// customers[0] = 'kha';

// 0011a = ['kha', 'nhan', 'thuy', 'ngan'];

// console.log(users);
// 0011a: ['kha', 'nhan', 'thuy', 'ngan'];

// users[1] = 'thach';
// 0011a: ['kha', 'thach', 'thuy', 'ngan'];

// console.log(users);
// 0011a: ['kha', 'thach', 'thuy', 'ngan'];
// console.log(customers);
// 0011a: ['kha', 'thach', 'thuy', 'ngan'];

// console.log(helloUser(users[0])); //hello kha
// console.log(helloUser(users[1])); //hello thach
// console.log(helloUser(customers[1])); //hello thach

// function helloUser(user) {
//   return 'hello ' + user;
// }

// let customers = users;
/**
 * Khi customers thay đổi -> users sẽ bị thay đổi theo
 * khi users thay đổi -> customers sẽ bị thay đổi theo
 * --> tại vì users và customers cùng trỏ đến một địa chỉ
 */

// let users = ['hung', 'nhan', 'thuy', 'ngan'];
// let customers = [...users];
/**
 * b1: let customers = []; //abc02
 * b2: ...users => 'kha', 'nhan', 'thuy', 'ngan'
 * b4: let customers = [...users]; <=> let customers = ['kha', 'nhan', 'thuy', 'ngan'];
 */
/**
 * Khi customers thay đổi -> users không bị thay đổi theo
 * Khi users thay đổi -> customers không bị thay đổi theo
 * --> users và customers phải trỏ đến 2 địa chỉ khác nhau
 */

/**
 * Giải thích về cách lưu trên ô nhớ
 *
 * --------|--------|--------|--------
 *  abc01    abc02    abc03    abc04
 *  users   customers
 */
/**
 * 1. let đầu tiên
 *   - Địa chỉ của biến users trên thanh RAM là abc01
 *   - Giá trị tại <địa chỉ> của biến users là ['kha', 'nhan', 'thuy', 'ngan']
 *    ==> Giá trị tại abc01 là ['kha', 'nhan', 'thuy', 'ngan']
 *
 * 2. let thứ 2
 *   - Địa chỉ của biến customers trên thanh RAM là abc02
 *   - Giá trị tại <địa chỉ> của biến customers là ['kha', 'nhan', 'thuy', 'ngan']
 *    ==> Giá trị tại abc02 là ['kha', 'nhan', 'thuy', 'ngan']
 */

//  let users = ['hung', 'nhan', 'thuy', 'ngan'];
//  let customers = [...users];

// customers[0] = 'kha';
// console.log(users[0]); // hung
// console.log(customers[0]); // kha


// Function filter cua array
// const listNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const result = listNums.filter((item) => {
//   if (item % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(result);

// const users = [
//   {
//     id: 1,
//     name: 'hung'
//   },
//   {
//     id: 2,
//     name: 'nhan'
//   }
// ]

// const search = 'un';

// const result = users.find((item) => {
//   console.log(item.name);
//   if () {

//   }
// });

// console.log(result);
// undefined, null, 0, false, [] => false
// 1,2,3,4, => true

/**
 * ASC: Sắp xếp tăng dần
 * DESC: Sắp xếp giảm dần
 */

/**
 * Tìm hiểu về thuật toán sắp sếp nổi bọt bubble sort
 */
/**
 * 2 loại toán tử so sánh bằng
 *
 * a == b :
 *   - Lấy giá trị của biến a so sánh với biến b
 * a === b :
 *   - Lấy giá trị của biến a so sánh với biến b
 *   - Lấy kiểu dữ liệu của biến a so sánh với biến b
 */

/**
 * Vd vong lap
 */

var arr = ['Item 1', 'Item 2', 'Item 3', 'Item 4']; //4

// for (let i=0; i<i+1; i++) {
//   console.log('chay vong lap: ' + i);
// }

// i: 0
// i<i+1: 0<1 true

// i: 1
// i<i+1: 1<2 true

// i: 2
// i<i+1: 2<3 true


/**
 * i: 4
 * phep so sanh: true, true, true, false
 * thuc thi code:
 * gia tri tang: i++:
 */

// Ket qua hien ra:
// console.log('chay vong lap 0');
// console.log('chay vong lap 1');
// console.log('chay vong lap 2');
// console.log('chay vong lap 3');
// console.log('ngung vong lap');

// result = [2,1,3,4,5]

// i: 0
// i+1: 1

// result[i] <=> result[0] = 2
// result[i+1] <=> result[1] = 1

// if (result[i] > result[i+1]) { // 2 > 1
//   tmp = result[i];
//   result[i] = result[i+1];
//   result[i+1] = tmp;
// }

// tmp = 2
// result[i] = 1
// result[i+1] = 2

// // result[i] = 1
// // result[i+1] = 2