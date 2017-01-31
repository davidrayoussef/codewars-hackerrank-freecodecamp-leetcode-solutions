// Write a function to find the longest common prefix string amongst an array of strings.

function longestCommonPrefix(strs) {
  if ( !strs.length ) return '';

  const min = strs.sort((a,b) => a.length - b.length)[0].length;
  let j = 0;
  let acc = '';

  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    while (j < min) {
      if ( strs.every(str => str[j] === curr[j]) ) {
        acc += curr[j];
        j++;
      }
      else return acc;
    }
  }

  return acc;
}

longestCommonPrefix(["abca","abc"]); //=> "abc"
