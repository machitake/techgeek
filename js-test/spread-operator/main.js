//次の配列を、別の配列の要素 newArrayとして展開してください。スプレッド構文を使用してください。
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = [...array1, ...array2];
console.log(array3);

//次の２つのオブジェクトを一つにまとめ、さらに新しいプロパティ {prop3: "value3"} を追加したオブジェクトnewObjを作成してください。スプレッド構文を使用してください。
const obj1 = {
  prop1: "value1"
};
const obj2 = {
  prop2: "value2"
};

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const newObj = {...obj3, prop3: "value3"};
console.log(newObj);

//次の関数は、可変長の引数を渡して、それらの合計値を求める関数です。xxxxxのところに適切なコードを書いて関数を完成させてください。
// function sum(...nums) {
//   return nums.xxxxxxxxxxxxxxxxxxxxxxx
// }


  function sum(...nums) {
    return nums.reduce((total, num) => total + num, 0);
  }

  const sumResult = sum(1, 2, 3, 4, 5);
  console.log(sumResult);


//次の配列から、2 と 4 だけを取り出して新しい配列を作成してください。デストラクチャリングを使用してください。
{
  const numbers = [1, 2, 3, 4, 5];
  const [, two, , four] = numbers;
  const newNumbers = [two, four];
  
  console.log(newNumbers);
}

//次のオブジェクトから、nameプロパティとそれ以外のプロパティを分割し、
//それぞれのオブジェクト nameObj と othersObjに格納してください。
//デストラクチャリングとスプレッド構文を使用してください。
{
  const person = {
    name: "John",
    age: 30,
    gender: "male"
  };
  const {name, ...others} = person;
  const nameObj = {name};
  const othersObj = others;
  console.log(nameObj, othersObj);
}

//次の配列の要素から、2番目から6番目までを取り出して新しい配列を作成してください。
//スプレッド構文を使用してください。その後、新しい配列から、1番目と4番目の要素を削除してください。
//また、新しい配列の要素の合計値を出力してください。
const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = [...array.slice(1, 6)];
console.log('newArray', newArray);

const newArray2 = [...newArray.slice(0, 1), ...newArray.slice(3, 4)];
const newArray3 = sum(...newArray2);//sum関数を使用

console.log('newArray2', newArray2);
console.log('newArray3', newArray3);

//次のようなオブジェクトがあるとします。この二つのオブジェクトから、 
// superNestedProp1の値を取得するために、デストラクチャリングを使って、
// それぞれ1行で必要なプロパティのみを抽出してください。
// ただし、 obj2 のように、 prop3 や nestedProp3 が存在しない場合には、
// 空のオブジェクトを代入し、エラーにならないようにしてください。
{
  const obj1 = {
    prop1: "value1",
    prop2: "value2",
    prop3: {
      nestedProp1: "nestedValue1",
      nestedProp2: "nestedValue2",
      nestedProp3: {
        superNestedProp1: "superNestedValue1",
        superNestedProp2: "superNestedValue2"
      }
    }
  };
  const obj2 = {
    prop1: "value1",
    prop2: "value2"
  };

  const { prop3: {nestedProp3: {superNestedProp1: superNestedProp1FromObj1 }}} = obj1;
  const { prop3: { nestedProp3: { superNestedProp1: superNestedProp1FromObj2 } = {} } = {} } = obj2;
  console.log(superNestedProp1FromObj1);
  console.log(superNestedProp1FromObj2);
}