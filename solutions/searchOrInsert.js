// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You may assume no duplicates in the array.

function searchOrInsert(nums, target) {
  const findTarget = arr => arr.findIndex(v => v === target)
  const found = findTarget(nums);

  return found !== -1 ?
    found :
    (() => {
      nums.push(target)
      return findTarget(nums.sort((a,b) => a - b));
    })();
}

searchOrInsert([1,3,5,6], 5); //=> 2
searchOrInsert([1,3,5,6], 2); //=> 1
searchOrInsert([1,3,5,6], 7); //=> 4
searchOrInsert([1,3,5,6], 0); //=> 0
