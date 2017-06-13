/*
Write a function that takes a piece of text in the form of a string and returns the letter frequency count for the text.
This count excludes numbers, spaces and all punctuation marks. Upper and lower case versions of a character are equivalent
and the result should all be in lowercase.

The function should return a list of arrays sorted by the most frequent letters first. Letters with the same frequency are
ordered alphabetically. For example:

letterFrequency('aaAabb dddDD hhcc'); => [['d',5], ['a',4], ['b',2], ['c',2], ['h',2]]
*/

function letterFrequency(str) {
  return [...str
    .replace(/[^a-z]/gi, '')
    .split('')
    .reduce((map,curr) => {
      curr = curr.toLowerCase();
      map.has(curr) ? map.set(curr, map.get(curr) + 1) : map.set(curr, 1);
      return map;
    }, new Map())
    .entries()]
    .sort((a,b) => a[1] === b[1] ? a[0].localeCompare(b[0]) : b[1] - a[1]);
}

JSON.stringify(letterFrequency('aaabbbbCCcccDddddddddEEEEEeeeee')); //=> [["e",10],["d",9],["c",5],["b",4],["a",3]]
JSON.stringify(letterFrequency('To be or not to be')); //=> [["o",4],["t",3],["b",2],["e",2],["n",1],["r",1]]
