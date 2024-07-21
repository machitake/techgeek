// あなたは、あるアンケートを作成しました。アンケートには、20 の質問があります。
//回答者は各質問に対して、「はい」か「いいえ」で答える必要があります。
//回答者が「はい」と答えた回数と「いいえ」と答えた回数を計算し、それぞれを出力するプログラムを作成してください。

const answers = "yes no yes no no yes yes no yes yes no yes no no yes no yes yes no yes";
// const answers = "yes no no yes no yes no yes yes no yes no yes no no yes no yes yes no";
// const yesCount = answers.split("yes").length - 1;
// const noCount = answers.split("no").length - 1;

// console.log(`はい: ${yesCount}回, いいえ: ${noCount}回`);

const answerArray = answers.split(' ');
// console.log(answerArray);

const yesCount = answerArray.filter(answer => answer === 'yes').length;
const noCount = answerArray.filter(answer => answer === 'no').length;

console.log(`はい: ${yesCount}回, いいえ: ${noCount}回`);


// あるデータベースには、商品の名前と価格が格納されています。
// 与えられたリストにある商品の名前とその価格をデータベースから取得し、合計金額を計算して出力するプログラムを作成してください。
// const input = ["apple", "banana", "orange"];
const input = ["kiwi", "grape", "strawberry", "grape", "cherry"];
const db = {
  banana: 200,
  strawberry: 50,
  mango: 300,
  apple: 100,
  watermelon: 250,
  grape: 120,
  peach: 80,
  orange: 150,
  pineapple: 220,
  kiwi: 90,
  cherry: 70
};

// const totalPrice = input.reduce((acc, item) => acc + db[item], 0);
// console.log(`合計金額: ${totalPrice}円`);

let totalPrice = 0;
for (let i = 0; i < input.length; i++) {
  totalPrice += db[input[i]];
}
console.log(`合計金額: ${totalPrice}円`);


// ある映画館では、チケットの値段が大人（18 歳以上）は 1200 円、子供（18 歳未満）は 600 円です。ただし、80歳以上の方は半額の600円、6歳未満の子供は無料となります。
// 与えられたリストには、映画館に来た人々の年齢が格納されています。合計チケットの売り上げを出力するプログラムを作成してください。
{  
  // const input = "1 23 17 35 10 60 5 23 10 88 15";
  const input = "64 5 81 36 72 42 33 15 47 54 10 18 87 70 25";
  const ageArray = input.split(' ').map(Number);

  let total = 0;

  for (let i = 0; i < ageArray.length; i++) {
    if (ageArray[i] < 6) {
      total += 0;
    } else if (ageArray[i] >= 6 && ageArray[i] < 18) {
      total += 600;
    } else if (ageArray[i] >= 18 && ageArray[i] < 80) {
      total += 1200;
    } else {
      total += 600;
    }
  }

  console.log(total);
}