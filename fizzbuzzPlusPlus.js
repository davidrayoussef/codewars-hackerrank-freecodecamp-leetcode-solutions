/*
Given a list of coprime numbers, (i.e., the g.c.d. of all the numbers == 1) and an equally sized list of words,
compute its fizzbuzz representation up until the pattern of strings repeats itself.

Here's an example:
fizzbuzzPlusPlus([2, 3, 5], ['fizz', 'buzz', 'bazz']); // => [1, 'fizz', 'buzz', 'fizz', 'bazz', 'fizzbuzz', 7,
'fizz', 'buzz', 'fizzbazz', 11, 'fizzbuzz', 13, 'fizz', 'buzzbazz', 'fizz', 17, 'fizzbuzz', 19, 'fizzbazz',
'buzz', 'fizz', 23, 'fizzbuzz', 'bazz', 'fizz', 'buzz', 'fizz', 29 , 'fizzbuzzbazz']

Things to note:
- Your function should return an Array of the output for each index, not print it.
- If elements are 1-indexed, the 10th item is fizz + bazz as 10 == 0 (mod 2) and 10 == 0 (mod 5).
- The strings are always concatenated from left to right in appearance of array.
- The number array may not always be sorted - just use the given order of the numbers.
- All numbers in the first array will always be coprime. This is a safe assumption for your program.
- The list stops where it does because if you were to filter the numbers out, the remaining strings would repeat
  after this point.
*/

function fizzbuzzPlusPlus(nums, words) {
  return Array
    .from({length: nums.reduce((a,b) => a * b, 1)})
    .map((_,i) => nums
      .filter(v => (i + 1) % v === 0)
      .map(v => words[nums.indexOf(v)])
      .join('') || i + 1
    );
}

fizzbuzzPlusPlus([3,5],['fizz','buzz']); //=> [1,2,"fizz",4,"buzz","fizz",7,8,"fizz","buzz",11,"fizz",13,14,"fizzbuzz"]
