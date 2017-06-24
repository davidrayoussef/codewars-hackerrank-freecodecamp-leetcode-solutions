/*
Write a function accumulator() that gives you these results...
accumulator("abcd");    // "A-Bb-Ccc-Dddd"
accumulator("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accumulator("cwAt");    // "C-Ww-Aaa-Tttt"
*/

function accumulator(str) {
  return str
    // Split the string into an array of its individual characters.
    .split('')
    // Map over the array values and use the String repeat method to repeat the value.
    // The repeat method accepts a count argument. In this case, we're using the index position of the character in the array
    // to specify how many times we want the character repeated (plus 1 since array indexes are zero-based).
    .map((v,i) => v.repeat(i + 1))
    // Map over the array values again, returning a concatenated string of the first character converted to uppercase,
    // plus a slice of the rest of the string starting from index 1 converted to lowercase.
    .map(v => v[0].toUpperCase() + v.slice(1).toLowerCase())
    // Join each string value in the array (separated by a dash between them) together as one string.
    .join('-');
}

accumulator('abcd'); //=> "A-Bb-Ccc-Dddd"
accumulator('RqaEzty'); //=> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accumulator('cwAt'); //=> "C-Ww-Aaa-Tttt"
