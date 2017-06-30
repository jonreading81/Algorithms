const getSieve = function (n) {
  let sieve = [false, false];
  let i;
  let k;

  // setup sieve with 1 set to false
  for (i = 2 ; i < n + 1; i++) {
    sieve.push(true);
  }
  i = 2;
  while (i * i < n) {
    if (sieve[i]) {
      k = i * i;
      while (k <= n) {
        sieve[k] = false;
        k += i;
      }
    }
    i++;
  }
  return sieve;
};

/*
const getPrimes = function (n) {
  const primeNumbers = [];
  const sieve = getSieve(n);
  sieve.forEach((value, index) => {
    if (value) primeNumbers.push(index);
  });
  return primeNumbers;
};
*/

const getSemiPrimes = function (n) {
  const sieve = getSieve(n);
  const semiPrimes = [];
  let i = 1;
  let k;

  while (i * i <= n) {
    if (sieve[i]) {
      k = i * i;
      while (k <= n) {
        if (k % i === 0 && sieve[k / i]) {
          semiPrimes.push(k);
        }
        k += i;
      }
    }
    i++;
  }
  return semiPrimes;
};

const solution = function (max, start, end) {
  let result = [];
  let semiPrimes = getSemiPrimes(max);
  let count = 0;
  const prefixSums = [];

  // create prefix sums of semi primes
  for (let i = 0; i <= max ; i++) {
    if (semiPrimes.indexOf(i) !== -1) {
      count++;
    }
    prefixSums.push(count);
  }
  for (let i = 0; i < start.length; i++) {
    result.push(prefixSums[end[i]] - prefixSums[start[i] - 1]);
  }
  return result;
};

export default solution;
