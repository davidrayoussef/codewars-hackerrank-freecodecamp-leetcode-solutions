// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function findMissingLetter(str) {
  return str
    .split('')
    .map((v,i) => {
      if (str[i + 1] && str[i + 1].charCodeAt() - str[i].charCodeAt() !== 1) {
        return String.fromCharCode(str[i].charCodeAt() + 1);
      } else return '';
    })
    .join('') || undefined;
}

findMissingLetter("abce"); //=> "d"
findMissingLetter("abcdefghjklmno"); //=> "i"
findMissingLetter("bcd"); //=> undefined
