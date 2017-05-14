/*
James found a love letter his friend Harry has written for his girlfriend. James is a prankster, so he decides to meddle with the letter.
He changes all the words in the letter into palindromes.

To do this, he follows two rules:
- He can reduce the value of a letter, e.g. he can change d to c, but he cannot change c to d.
- In order to form a palindrome, if he has to repeatedly reduce the value of a letter, he can do it until the letter becomes a. Once a
  letter has been changed to a, it can no longer be changed.

Each reduction in the value of any letter is counted as a single operation. Find the minimum number of operations required to convert
a given string into a palindrome.

Input will be a line separated string. First line is the number of words, followed by all the words.
*/

const input = `5
pue
heubsbn
feazhaxpux
hmhcy
tmp`;

function makePalindromeCount(input) {
  input = input.split('\n').slice(1);
  let result = [];

  input.map(str => {
    if ( str === str.split('').reverse().join('') ) result.push(0);
    else {
      let arr = str.split('');
      let count = 0;

      for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
        if (arr[i] < arr[j]) {
          while (arr[i] < arr[j]) {
            arr[j] = String.fromCharCode(arr[j].charCodeAt() - 1);
            count++;
          }
        }
        else if (arr[j] < arr[i]) {
          while (arr[j] < arr[i]) {
            arr[i] = String.fromCharCode(arr[i].charCodeAt() - 1);
            count++;
          }
        }
      }

      result.push(count);
    }
  });

  console.log(result.join('\n'));
}

makePalindromeCount(input); //=>
/*
11
11
58
27
4
*/
