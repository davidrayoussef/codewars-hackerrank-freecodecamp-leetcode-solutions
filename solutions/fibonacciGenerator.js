// Create a function generator that returns another function that always returns the next fibonacci number
// on each invocation (and returns 0 when being called the first time).

function fibonacciGenerator() {
  let fibs = [0,1];

  return () => {
    fibs.push(fibs[0] + fibs[1]);
    return fibs.shift();
  }
}

const fib = fibonacciGenerator();
fib(); //=> 0
fib(); //=> 1
fib(); //=> 1
fib(); //=> 2
fib(); //=> 3
fib(); //=> 5
