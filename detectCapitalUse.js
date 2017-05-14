/*
Given a word, you need to judge whether the usage of capitals in it is correct or not.

We define the usage of capitals in a word to be correct when one of the following cases holds:
1. All letters in this word are capitals, like "USA".
2. All letters in this word are not capitals, like "leetcode".
3. Only the first letter in this word is capital if it has more than one letter, like "Google".

Otherwise, we define that this word doesn't use capitals in a correct way.
*/

function detectCapitalUse(word) {
  const allUpperCase = (w) => w.split('').every(letter => /[A-Z]/g.test(letter));
  const allLowerCase = (w) => w.split('').every(letter => /[a-z]/g.test(letter));
  const initialCap = (w) => w[0] === w[0].toUpperCase() && w.slice(1).split('').every(letter => /[a-z]/g.test(letter));

  return allUpperCase(word) || allLowerCase(word) || initialCap(word);
}

detectCapitalUse('USA'); //=> true
detectCapitalUse('FlaG'); //=> false
detectCapitalUse('leetcode'); //=> true
detectCapitalUse('Google'); //=> true
