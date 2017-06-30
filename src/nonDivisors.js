const solution = function (A) {
  const nonDivisors = {};
  const result = [];
  const sorted = A.concat().sort((a, b) => b - a);
  let i;
  let j;
  let count;

  // build no divisors object
  for (i = 0; i < sorted.length; i++) {
    if (!nonDivisors.hasOwnProperty(sorted[i])) {
      count = i;
      for (j = i + 1; j < sorted.length; j++) {
        if (sorted[i] % sorted[j] !== 0) {
          count++;
        }
      }
      nonDivisors[sorted[i]] = count;
    }
  }
  for (i = 0; i < A.length; i++) {
    result.push(nonDivisors[A[i]]);
  }
  return result;

};

export default solution;
