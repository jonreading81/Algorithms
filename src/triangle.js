const solution = function (A) {
  let p;
  let q;
  let r;

  A.sort((a, b) => a - b);
  for (p = 0; p < A.length - 2; p++) {
    q = p + 1;
    r = p + 2;
    if (A[p] + A[q] > A[r] &&
      A[q] + A[r] > A[p] &&
      A[r] + A[p] > A[q]) {
      return 1;
    }
  }
  return 0;
};

export default solution;
