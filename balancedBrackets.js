// Check whether or not the string of brackets is balanced. If the brackets are balanced, print YES; otherwise, print NO.
// The passed string will only consist of opening and closing brackets of one of three types.

function balancedBrackets(str) {
  const opening = ['(', '{', '['];
  const closing = [')', '}', ']'];
  let stack = [];

  for (let char of str) {
    if ( opening.includes(char) ) {
      stack.push(char);
    }
    else if ( opening.indexOf(stack[stack.length - 1]) === closing.indexOf(char) ) {
      stack.pop();
    }
    else return 'NO';
  }

  return stack.length > 0 ? 'NO' : 'YES';
}

balancedBrackets('{[()]}'); //=> "YES"
balancedBrackets('{[(])}'); //=> "NO"
balancedBrackets('{{[[(())]]}}'); //=> "YES"
