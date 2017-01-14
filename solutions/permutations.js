// Return the number of total permutations of the provided string that don't have repeated consecutive letters.
// Assume that all characters in the provided string are each unique.

function permutations([...arr]) {
  let result = [];

  const generatePerms = (n) => {
    if (n === 1) result.push(arr.join(''));

    for (var i = 0; i < n; i++) {
      generatePerms(n - 1);
      let index = n % 2 === 0 ? i : 0;
      [arr[n - 1], arr[index]] = [arr[index], arr[n - 1]];
    }
  };

  generatePerms(arr.length);

  return result.filter(str => !str.match(/([a-z])\1/g)).length;
}

permutations('aab');
