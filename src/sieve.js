const solution = function (number) {
  let sieve = [false, false];
  let primeNumbers = [];
  let i;
  let k;

  for (i = 2 ; i <= number; i++) {
    sieve.push(true);
  }
  i = 2;
  while (i * i < number) {
    if (sieve[i]) {
      k = i * i;
      while (k <= number) {
        sieve[k] = false;
        k += i;
      }
    }
    i++;
  }
  sieve.forEach((value, index) => {
    if (value) primeNumbers.push(index);
  });
  return primeNumbers;
};

export default solution;
