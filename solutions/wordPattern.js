/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.

You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.
*/

function wordPattern(pattern, str) {
  pattern = pattern.split('');
  str = str.split(' ');

  if (str.length !== pattern.length || [...new Set(str)].length !== [...new Set(pattern)].length) return false;

  let result = true;

  pattern.reduce((acc,curr,i) => {
    if (acc[curr] && acc[curr] !== str[i]) result = false;
    acc[curr] = str[i];
    return acc;
  }, {});

  return result;
}

wordPattern("aabababaa", "cat cat dog cat dog cat dog cat cat"); //=> true
