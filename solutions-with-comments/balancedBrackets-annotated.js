// Check whether or not the string of brackets is balanced. If the brackets are balanced, print YES; otherwise, print NO.
// The passed string will only consist of opening and closing brackets of one of three types.

function balancedBrackets(str) {
  // Define an array with all the opening brackets, and one with the closing brackets, in the same order (parentheses, braces,
  // square brackets) so that their indexes match.
  const opening = ['(', '{', '['];
  const closing = [')', '}', ']'];
  // We'll use a stack to match an opening and closing bracket of the same type by checking the current bracket we're iterating
  // over against the top of the stack.
  let stack = [];

  // We'll use a for of loop instead of the map method in case we need to return early.
  for (let char of str) {
    // If the current value is an opening bracket (if the opening array includes that value), then we push that value to the top
    // of the stack.
    if ( opening.includes(char) ) {
      stack.push(char);
    }
    // Else (it's a closing bracket, so) if the index of an opening bracket at the top of the stack is the same as the index of
    // this closing bracket in the closing array (in other words, they're the same type), then we pop off the matching opening
    // bracket from the top of the stack.
    else if ( opening.indexOf(stack[stack.length - 1]) === closing.indexOf(char) ) {
      stack.pop();
    }
    // If neither of those conditions are true, then we have a closing bracket without a matching opening bracket, so we're
    // done and return 'NO'.
    else return 'NO';
  }

  // At this point, we should have an empty stack in the end if all the brackets were matched. Let's check the length of the
  // stack. If it's greater than 0, then the brackets weren't balanced and we return 'NO,' otherwise return 'YES.'
  return stack.length > 0 ? 'NO' : 'YES';
}

balancedBrackets('{[()]}'); //=> "YES"
balancedBrackets('{[(])}'); //=> "NO"
balancedBrackets('{{[[(())]]}}'); //=> "YES"
