// Create a function that takes two or more arrays and returns an array of the
// symmetric difference (△ or ⊕) of the provided arrays.
// For every additional symmetric difference you take, you should get
// the set with elements which are in either of the two the sets but not both

function symmetricDifference() {
  let arrs = Array
    .from(arguments)
    .map(arr => arr.filter((v,i,a) => a.indexOf(v) === i));

  function getDiff(arrs) {
    let arr1 = arrs[0];
    let arr2 = arrs[1];
    arrs.splice(0, 2);

    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr1.splice(i, 1);
          arr2.splice(j, 1);
          i = 0;
          j = 0;
        }
      }
    }

    if (arrs.length) {
      arrs.unshift(arr1.concat(arr2));
      return getDiff(arrs);
    } else return arr1.concat(arr2);
  }

  return getDiff(arrs);
}

symmetricDifference([1, 2, 5], [2, 3, 5], [3, 4, 5]); //=> [1, 4, 5]
