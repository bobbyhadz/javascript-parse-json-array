// EXAMPLE 1 - Parse a JSON Array in JavaScript

const jsonArr =
  '[{"id": 1, "name": "Tom"}, {"id": 2, "name": "Alice"}]';

const arr = JSON.parse(jsonArr);

// 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Alice'}]
console.log(arr);

console.log(Array.isArray(arr)); // 👉️ true

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using a `try/catch` statement to handle a potential error

// const jsonArr =
//   '[{"id": 1, "name": "Tom"}, {"id": 2, "name": "Alice"}]';
// let arr;

// try {
//   arr = JSON.parse(jsonArr);
//   console.log('✅ JSON array parsed successfully');
// } catch (err) {
//   console.log('⛔️ invalid JSON provided');
//   // report error
// }

// // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Alice'}]
// console.log(arr);

// ------------------------------------------------------------------

// // EXAMPLE 3 - Making sure your JSON array is valid

// const invalidJson = "['apple', 'banana']";

// const validJson = invalidJson.replaceAll(`'`, `"`);

// // 👇️ {'apple', 'banana'}
// const parsed = JSON.parse(validJson);
// console.log(parsed);
