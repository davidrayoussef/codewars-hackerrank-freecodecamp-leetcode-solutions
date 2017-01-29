// For each string, print whether or not the string of brackets is balanced on a new line.
// If the brackets are balanced, print YES; otherwise, print NO.

function balancedBrackets(expression) {
  const opening = ['(', '{', '['];
  const closing = [')', '}', ']'];
  let stack = [];

  expression.split('').map(v => {
    if ( opening.includes(v) ) {
      stack.push(v);
    }
    else if ( closing.includes(v) && opening.indexOf(stack[stack.length - 1]) === closing.indexOf(v) ) {
      stack.pop();
    }
    else stack.push(v);
  });

  return stack.length ? 'NO' : 'YES';
}

balancedBrackets('{[()]}'); //=> "YES"
balancedBrackets('{[(])}'); //=> "NO"
balancedBrackets('{{[[(())]]}}'); //=> "YES"
