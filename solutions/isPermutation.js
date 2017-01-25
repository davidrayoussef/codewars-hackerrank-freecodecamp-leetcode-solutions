// A permutation is a sequence containing each element from 1 to N once, and only once.
// The goal is to check whether arr is a permutation

function isPermutation(arr) {
  return arr
    .sort((a,b) => b < a)
    .every((v,i) => v === i + 1);
}

isPermutation([2,3,1,5]); //=> false
isPermutation([4,2,3,1,5]); //=> true
