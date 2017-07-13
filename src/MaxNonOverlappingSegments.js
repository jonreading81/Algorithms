const solution = function (A, B) {
  if (A.length < 1) return 0;

  let count = 1;
  let lastEnd = B[0];

  for (let i = 1; i < A.length; i++) {
    if (A[i] > lastEnd) {
      count++;
      lastEnd = B[i];
    }
  }
  return count;
};

export default solution;
