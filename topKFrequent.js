// Given a non-empty array of integers, return the k most frequent elements.
// For example, given [1,1,1,2,2,3] and k = 2 ... return [1,2]

function topKFrequent(nums, k) {
  const tally = nums.reduce((obj,key) => {
    obj[key] ? obj[key]++ : obj[key] = 1;
    return obj;
  }, {});

  return Object
    .keys(tally)
    .sort((key1, key2) => tally[key2] - tally[key1])
    .slice(0, k)
    .map(Number);
}

topKFrequent([1,1,1,2,2,3], 2); //=> [1,2]
