// function sumRecursive(num) {
//   if (num === 1) {
//     return 1;
//   }
//   return num + sumRecursive(num - 1);
// }

// console.log(sumRecursive(5));

//1から10までの整数を順番に表示するプログラムをwhile文を使って作成してください。
function displayNumbers(num) {
  let i = 1;
  while (i <= num) {
    console.log(i);
    i++;
  }
}
console.log(displayNumbers(10));

//ある数nが素数かどうかを判定するプログラムをwhile文を使って作成してください。
function isPrime(num) {
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(17));
console.log(isPrime(25));

// フィボナッチ数列の第n項を再帰関数を使って求めるプログラムを作成してください。
function fibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log("フィボナッチ", fibonacci(3));

//第n個の項までのフィボナッチ数列の和を返す再帰関数を作成してください。
function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  }
  return fibonacci(num) + sumFibonacci(num - 1);
}

console.log("フィボナッチ数列の和", sumFibonacci(5));