// Find the most frequent string in an array

const arr = ['apples', 'oranges', 'bananas', 'oranges', 'bananas', 'apples', 'oranges', 'bananas', 'apples', 'apples'];

function mostFrequentString(arr) {
  const tally = arr.reduce((obj, item) => {
    !obj[item] ? obj[item] = 1 : obj[item]++;
    return obj;
  }, {});

  return Object.keys(tally).reduce((acc, curr) => {
    return tally[acc] > tally[curr] ? acc : curr;
  });
}

mostFrequentString(arr); //=> "apples"
