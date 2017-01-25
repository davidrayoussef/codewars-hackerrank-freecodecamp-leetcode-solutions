// Find all permutations of characters in an array
// This solution also gives you repeated characters
// For instance, ['a', 'b', 'c'] gives you 'aaa', 'bbb', 'ccc' among results

function permute(arr, str = '', perms = []) {
  if (str.length === arr.length) perms.push(str);
  else arr.map(v => permute(arr, str + v, perms));

  return perms;
}

permute(['a', 'b']); //=> ["aa", "ab", "ba", "bb"]
