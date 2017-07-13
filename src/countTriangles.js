const solution = function (A) {
  let p;
  let q;
  let r;
  let count = 0;

  A.sort((a, b) => a - b);
  for (p = 0; p < A.length - 2; p++) {
    r = p + 2;
    for (q = p + 1; q < A.length - 1; q++) {
      while (r < A.length && (A[p] + A[q] > A[r])) {
        r++;
      }
    count += (r - q - 1);
    }
  }
  return count;
};
export default solution;
