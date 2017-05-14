// Reverse only the vowels in a string ... e.g. "leetcode" becomes "leotcede"

function reverseVowels(str) {
  const vowels = str.match(/[aeiou]/gi);

  return str
    .split('')
    .map(letter => /[aeiou]/gi.test(letter) ? vowels.pop() : letter)
    .join('');
}

reverseVowels('leetcode'); //=> "leotcede"
