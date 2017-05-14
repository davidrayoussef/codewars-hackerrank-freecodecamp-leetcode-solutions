// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.

function smallestCommonMultiple(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const numsBetween = Array.from({length: max - min + 1}).map((v,i) => min + i);
  let acc = max;

  const areDivisible = (dividend) => {
    return numsBetween.every(divisor => dividend % divisor === 0);
  };

  while (true) {
    if ( areDivisible(acc) ) {
      return acc;
    } else acc += max;
  }
}

smallestCommonMultiple([1, 5]); //=> 60
