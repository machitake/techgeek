//次のオブジェクトから、 name と age を取り出して変数に代入してください。デストラクチャリングを使用してください。
const person = {
  name: "John",
  age: 30,
  gender: "male"
};

const {name, age} = person;
console.log(name, age);

//次の配列から、2番目の要素を取り出して変数に代入してください。デストラクチャリングを使用してください。
const array = [1, 2, 3, 4, 5];

const [, second] = array;
console.log(second);

//次のperson1,person2オブジェクトから、 nameと ageを取り出して変数に代入し、
//デフォルト値を設定してください。デストラクチャリングを使用してください。
//デフォルト値は、 name が Unknown で、 age が 0 になるように設定してください。
const person1 = {
  name: "John",
  gender: "male"
};
const person2 = {
  age: "35"
}

const {name: name1 = "Unknown", age: age1 = 0} = person1;
const {name: name2 = "Unknown", age: age2 = 0} = person2;
console.log(name1, age1, name2, age2);
