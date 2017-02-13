/*
Given scores of N athletes, find their relative ranks, while the athletes with the top three highest scores get
awarded the following medals, respectively: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]

Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal"
and "Bronze Medal".

For the remaining two athletes, you just need to output their relative ranks according to their scores.
*/

function findRelativeRanks(nums) {
  let restOfRanks = 4;
  const ranks = nums
    .slice()
    .sort((a,b) => a < b ? 1 : -1)
    .reduce((obj,key,i) => {
      if (i === 0) obj[key] = 'Gold Medal';
      else if (i === 1) obj[key] = 'Silver Medal';
      else if (i === 2) obj[key] = 'Bronze Medal';
      else obj[key] = String(restOfRanks++);

      return obj;
    }, {});

  return Object.keys(ranks).map((_,i) => ranks[nums[i]]);
}

findRelativeRanks([10,3,8,9,4]); //=> ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
