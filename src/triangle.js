const solution = function (A) {
  let p;

  A.sort((a, b) => a - b);
  for (p = 0; p < A.length - 2; p++) {
    if (A[p] + A[p + 1] > A[p + 2]) {
      return 1;
    }
  }
  return 0;
};

export default solution;
