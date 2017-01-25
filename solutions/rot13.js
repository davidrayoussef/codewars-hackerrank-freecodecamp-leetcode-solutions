// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
// Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
// Do not transform any non-alphabetic character but do pass them on.

function rot13(str) {
  let chars = Array
    .from({length: 26})
    .map((_,i) => String.fromCharCode(i + 65));

  chars = chars.concat(chars);

  return str
    .split('')
    .map(v => !v.match(/[A-Z]/) ? v : chars[chars.indexOf(v) + 13])
    .join('');
}

rot13("SERR PBQR PNZC"); //=> "FREE CODE CAMP"
