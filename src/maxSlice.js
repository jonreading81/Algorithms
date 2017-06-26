const solution = function (A) {
  let len = A.length;
  let sum = A[0];
  let maxSum = A[0];
  let i;

  for (i = 1; i < len; i++) {
    sum = Math.max(A[i], sum + A[i]);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

export default solution;
