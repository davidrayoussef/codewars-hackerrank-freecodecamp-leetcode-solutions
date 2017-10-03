// Return an array of all permutations of the provided string without repeated characters.
// Assume that all characters in the provided string are each unique.

function permutations(str) {
  let result = [];
  const traverse = (str, temp) => {
    if (str.length === temp.length) result.push(temp);
    else {
      for (let char of str) {
        if (!temp.includes(char)) {
          temp += char;
          traverse(str, temp);
          temp = temp.slice(0, -1);
        }
      }
    }
  };

  traverse(str, '');

  return result;
}

permutations('abc'); //=> ["abc", "acb", "bac", "bca", "cab", "cba"]
