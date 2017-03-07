// Given an array of numbers, your function should return an array of arrays, where each subarray contains all the
// duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain.

function groupNumbers(arr) {
  return arr
    .map(num => arr.indexOf(num) !== arr.lastIndexOf(num) ? arr.filter(v => v === num) : [num])
    .map(arr => String(arr))
    .filter((v,i,a) => a.indexOf(v) === i)
    .map(v => v.split(',').map(Number))
}

JSON.stringify(groupNumbers([3, 2, 6, 2, 1, 3])) //=> "[[3,3],[2,2],[6],[1]]"
