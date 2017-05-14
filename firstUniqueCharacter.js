/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0
Since letter 'e' repeats, the first non-repeating character is 'l' which is index 0

s = "loveleetcode"
return 2
Since both the letters 'l' and 'o' repeat, the first non-repeating character is 'v' of index 2
*/

function firstUniqueCharacter(s) {
  const singles = s.split('').filter(letter => s.indexOf(letter) === s.lastIndexOf(letter));

  return singles.length ? s.indexOf(singles[0]) : -1;
}

firstUniqueCharacter("loveleetcode"); //=> 2
