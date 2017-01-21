// You are given  sticks, where the length of each stick is a positive integer.
// A cut operation is performed on the sticks such that all of them are reduced by the length of the smallest stick.

// Suppose we have six sticks of the following lengths: 5 4 4 2 2 8

// Then, in one cut operation we make a cut of length 2 from each of the six sticks.
// For the next cut operation four sticks are left (of non-zero length), whose lengths are the following: 3 2 2 6
// The above step is repeated until no sticks are left.

// Given the length of  sticks, print the number of sticks that are left before each subsequent cut operations.
// Note: For each cut operation, you have to recalcuate the length of smallest sticks (excluding zero-length sticks).

let arr = [5, 4, 4, 2, 2, 8];

function cutTheSticks(arr) {
  let result = [];
  let count;
  let min;

  const getMinNotZero = (arr) => {
    let nums = arr.filter(v => v !== 0);
    return Math.min.apply(null, nums);
  };

  const reduceBySmallest = (arr, min) => arr.map(v => {
    if (v !== 0) count++;
    return v !== 0 ? v - min : 0;
  });

  const allZeros = (arr) => arr.every(v => v === 0);

  while ( !allZeros(arr) ) {
    count = 0;
    min = getMinNotZero(arr);
    arr = reduceBySmallest(arr, min);
    result.push(count);
  }

  return result.join('\n');
}

cutTheSticks(arr); //=>
/*
"6
4
2
1"
*/
