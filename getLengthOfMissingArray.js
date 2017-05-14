/*
You get an array of arrays. If you sort the arrays by their length, you will see, that their length-values
are consecutive. But one array is missing!

Write a function that returns the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null or empty, return 0. When an array in the array is null or empty, the method should
return 0 too! There will always be a missing element and its length will always be between the given arrays.
*/

function getLengthOfMissingArray(arrayOfArrays, result = 0) {
  if (
    !arrayOfArrays ||
    arrayOfArrays.some(v => v === null) ||
    !arrayOfArrays.every(arr => arr.length)
  ) return 0;

  arrayOfArrays
    .sort((a,b) => a.length > b.length ? 1 : -1)
    .map(arr => arr.length)
    .map((_,i,a) => {
      if (a[i + 1] && a[i + 1] - a[i] !== 1) {
        result = a[i] + 1;
      }
    });

  return result;
}

getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]); //=> 3
