// Given a string, return a new string that has been transformed based on the input:
// 1. Change case of every character, ie. lower case to upper case, upper case to lower case.
// 2. Reverse the order of words from the input.

function stringTransformer(str) {
  return str
    .split(' ')
    .map(word => [...word]
      .map(letter => letter.toLowerCase() === letter ? letter.toUpperCase() : letter.toLowerCase())
      .join('')
    )
    .reverse()
    .join(' ');
}

stringTransformer('Example string'); //=> "STRING eXAMPLE"
