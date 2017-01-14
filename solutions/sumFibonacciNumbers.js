// Given a positive integer num, return the sum of all odd Fibonacci numbers that are
// less than or equal to num.

function sumFibonacciNumbers(num) {
  let a = 1;
  let b = 1;
  let temp;
  let result = [1, 1];

  while (a + b <= num) {
    result.push(a + b);
    temp = a;
    a = b;
    b = temp + b;
  }

  return result.filter(v => v % 2 !== 0).reduce((acc, curr) => acc + curr);
}

sumFibonacciNumbers(1000); //=> 1785
