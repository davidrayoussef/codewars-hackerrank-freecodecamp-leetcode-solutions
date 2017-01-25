// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to contain
//  only alphanumeric characters, including digits, uppercase and lowercase alphabets.

function countDuplicates(text) {
  return text
    .toLowerCase()
    .split('')
    .filter((v,i,a) => a.indexOf(v) !== i)
    .filter((v,i,a) => a.indexOf(v) === i)
    .length;
}

countDuplicates("abcde"); //=> 0
countDuplicates("aabBcde"); //=> 2
countDuplicates("Indivisibilities"); //=> 2
