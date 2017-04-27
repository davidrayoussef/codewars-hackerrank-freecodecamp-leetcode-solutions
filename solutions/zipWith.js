/*
Implement a zipWith function, which takes a function and two arrays and zips the arrays together, applying the function to
every pair of values. The function value is one new array.

If the arrays are of unequal length, the output will only be as long as the shorter one.
(Values of the longer array are simply not used.)
*/

function zipWith(fn, arr1, arr2) {
  return Array
    .from({length: Math.min(arr1.length, arr2.length)})
    .map((_,i) => fn(arr1[i], arr2[i]));
}


zipWith( Math.pow, [10,10,10,10], [0,1,2,3] ); //=> [1,10,100,1000]
zipWith( Math.max, [1,4,7,1,4,7], [4,7,1,4,7,1] ); //=> [4,7,7,4,7,7]
zipWith( (a,b) => a + b, [0,1,2,3], [0,1,2,3] ); //=> [0,2,4,6]
