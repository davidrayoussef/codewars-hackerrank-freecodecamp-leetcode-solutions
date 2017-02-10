// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
// For example: Given num = 38, the process is: 3 + 8 = 11 => 1 + 1 = 2. Since 2 has only one digit, return it.

function addDigits(num) {
  const splitNumbers = (n) => [...String(n)].map(Number);
  const sumNumbers = (arr) => arr.reduce((acc,curr) => acc + curr);
  let nums = splitNumbers(num);

  while (nums.length > 1) {
    nums = splitNumbers(sumNumbers(nums));
  }

  return nums[0];
}

addDigits(38); //=> 2
