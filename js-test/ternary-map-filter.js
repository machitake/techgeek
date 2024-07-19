//次のコードを三項演算子を使用して書き換えてください。
let num = 0;
// if (num > 5) {
//   console.log("numは5より大きいです");
// } else {
//   console.log("numは5以下です");
// }

const numCheck = num > 5 ? "numは5より大きいです" : "numは5以下です";
console.log(numCheck);

//次のコードを三項演算子を使用して書き換えてください。
let age = 20;
// let message;
// if (age < 18) {
//   message = "未成年です";
// } else {
//   message = "成人です";
// }
// console.log(message);

const message = age < 18 ? "未成年です" : "成人です";
console.log(message);

//次のコードを三項演算子を使用して書き換えてください。
let user = {name: "山田", age: "19"};
// let greeting;
// if (user) {
//   greeting = `ようこそ、${user.name}さん。`;
//   if(user.age > 18){
//     greeting += `${user.name}さんは、成人しています。`;
//   } else {
//     greeting += `${user.name}さんは、未成年です。`;
//   }
// } else {
//   greeting = "ようこそ、ゲストさん。";
// }
// console.log(greeting);

const greeting = user ? `ようこそ、${user.name}さん。` + (user.age > 18 ? `${user.name}さんは、成人しています。` : `${user.name}さんは、未成年です。`) : "ようこそ、ゲストさん。";
console.log(greeting);

// 次の配列の全ての要素を2倍にして新しい配列を作成してください。map関数を使用してください。
const numbers = [1, 2, 3, 4, 5];
const doubleNumbers = numbers.map(number => number * 2);
console.log(doubleNumbers);

// 次の配列の全ての要素の文字列を大文字にして新しい配列を作成してください。map関数を使用してください。
const fruits = ["apple", "banana", "orange", "grape"];

const uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(uppercaseFruits);

// 次の配列の全ての数値を2進数に変換して新しい配列を作成してください。map関数を使用してください。
const binaryNumbers = [1, 2, 3, 4, 5];
const newBinaryNumbers = binaryNumbers.map(number => number.toString(2));
console.log(newBinaryNumbers);

//次の配列の中から2以上の数値だけを抽出して新しい配列を作成してください。filter関数を使用してください。
const filterNumbers = [1, 2, 3, 4, 5];
const newFilterNumbers = filterNumbers.filter(number => number >= 2);
console.log(newFilterNumbers);

//次の配列の中から文字列の長さが5以上の要素だけを抽出して新しい配列を作成してください。filter関数を使用してください。
const filterFruits = ["apple", "banana", "orange", "grape"];
const newFilterFruits = filterFruits.filter(fruit => fruit.length >= 5);
console.log(newFilterFruits);

//次の配列の中から偶数だけを抽出して新しい配列を作成してください。filter関数を使用してください。
const filterEvenNumbers = [1, 2, 3, 4, 5];
const newFilterEvenNumbers = filterEvenNumbers.filter(number => number % 2 === 0);
console.log(newFilterEvenNumbers);