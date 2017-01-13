// Check if a string is a pangram or not.
// A pangram is a sentence that contains every single letter of the alphabet at least once.

function isPangram(str) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return str
    .split('')
    .map(v => v.toLowerCase())
    .filter(v => /[a-z]/.test(v))
    .filter((v,i,a) => a.indexOf(v) === i)
    .sort()
    .join('') === alphabet ? 'Pangram' : 'Not a Pangram';
}

isPangram('The quick brown fox jumps over the lazy dog.'); //=> "Pangram"
