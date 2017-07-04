const solution = function (A, B) {
  const MAX_A = Math.max(...A);
  const MAX_B = Math.max(...B);
  let fib = [0, 1];
  let result = Array(A.length);

  for (let i = 2; i <= MAX_A + 1; i++) {
    fib[i] = fib[i - 1] + fib[i - 2] % Math.pow(2, MAX_B);
  }

  for (let i = 0; i < A.length; i++) {
    result[i] = fib[A[i] + 1] & (Math.pow(2, B[i]) - 1);
  }

  return result;
};

export default solution;
