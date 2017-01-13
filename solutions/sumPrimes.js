// Sum all the prime numbers up to and including the provided number.
function sumPrimes(num) {
  let primes = [];
  const isPrime = (n) => {
    let divisor = 2;
    while (divisor < n) {
      if (n % divisor === 0) {
        return false;
      } else divisor++;
    }
    return true;
  };

  for (let i = 2; i <= num; i++) {
    isPrime(i) && primes.push(i);
  }

  return primes.reduce((a,b) => a + b);
}

sumPrimes(10); //=> 17
