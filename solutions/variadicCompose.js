// Your task is to write a compose function which can compose any number of functions together.

function compose(...fns) {
  return function(arg) {
    return fns.reduceRight((acc, fn) => {
      return fn(acc);
    }, arg);
  }
}

const addOne = (a) => a + 1;
const multiplyByTwo = (b) => b * 2;

compose(addOne, multiplyByTwo, addOne, addOne)(2); //=> 9
