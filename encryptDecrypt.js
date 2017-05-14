/*
To encrypt a string, take every 2nd character from the string, followed by the rest, and then concatenate them as a new string.
Do this n times!

Examples:
"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"

Write two methods:
encrypt(text, n)
decrypt(encryptedText, n)

For both methods:
If the input-string is null or empty, return exactly this value!
If n is <= 0 then return the input text.
*/

function encrypt(text, n) {
  if (!text || n <= 0) return text;

  text = []
    .concat( text.split('').filter((letter,i) => i % 2 !== 0 && letter) )
    .concat( text.split('').filter((letter,i) => i % 2 === 0 && letter) )
    .join('')

  return encrypt(text, n - 1);
}

encrypt("This is a test!", 2); //=> "s eT ashi tist!"

function decrypt(encryptedText, n) {
  if (n <= 0) return encryptedText;

  let firstHalf = encryptedText.slice(encryptedText.length / 2).split('');
  let secondHalf = encryptedText.slice(0, encryptedText.length / 2).split('');
  let result = '';

  while (firstHalf.length || secondHalf.length) {
    result += (firstHalf.shift() || '') + (secondHalf.shift() || '');
  }

  return decrypt(result, n - 1);
}

decrypt("s eT ashi tist!", 2); //=> "This is a test!"
