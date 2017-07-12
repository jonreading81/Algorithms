
const solution = function (A) {

  let len = A.length;
  let start = Array(len).fill(0);
  let end = Array(len).fill(0);
  let maxSum = 0;
  let i;

  for (i = 1; i < len - 1; i++) {
    start[i] = Math.max(start[i - 1] + A[i], 0);
  }

  for (i = len - 2; i > 0; i--) {
    end[i] = Math.max(end[i + 1] + A[i], 0);
  }
  for (i = 1; i < len - 1; i++) {
    maxSum = Math.max(maxSum, start[i - 1] + end[i + 1]);
  }
  return maxSum;
};

export default solution;
