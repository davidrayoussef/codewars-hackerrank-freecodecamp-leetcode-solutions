// Cut the string into chunks of size sz (ignore the last chunk if its size is less than sz).
// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse it;
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

function reverseOrRotate(str, sz) {
  if (sz === 0 || sz >= str.length) return '';

  const chunks = new RegExp('.{' + sz + '}', 'g');
  const reverse = (s) => s.split('').reverse().join('');
  const rotate = (s) => s.slice(1) + s.slice(0, 1);
  const sumCubes = (s) => s.split('').reduce((acc, curr) => acc + (+curr * +curr * +curr), 0);

  return str
    .match(chunks)
    .map(chunk => sumCubes(chunk) % 2 === 0 ? reverse(chunk) : rotate(chunk))
    .join('');
}

reverseOrRotate('992845886559874108', 5); //=> "482995688598745"
