/*
Given two sets of positive integers, arr1 and arr2, a positive integer x is between sets arr1 and arr2
if the following conditions are satisfied:

1. All elements in arr1 are factors of x.
2. x is a factor of all elements in arr2.

Print the number of integers that are between the two sets.
*/

const arr1 = [2, 4];
const arr2 = [16, 32, 96];

function betweenTwoSets(arr1, arr2) {
  const min = Math.max(...arr1);
  const max = Math.min(...arr2);
  let result = [];

  const areFactorsOfX = x => arr1.every(v => x % v === 0);
  const xIsFactorOf = x => arr2.every(v => v % x === 0);

  for (let i = min; i <= max; i++) {
    if (areFactorsOfX(i) && xIsFactorOf(i)) {
      result.push(i);
    }
  }

  return result.length;
}

betweenTwoSets(arr1, arr2); //=> 3
