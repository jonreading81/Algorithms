const solution = function (A) {
  let minValue = A[0];
  let maxProfit = 0;
  let i = 0;

  for (i = 1; i < A.length; i++) {
    maxProfit = Math.max(maxProfit, A[i] - minValue);
    minValue = Math.min(minValue, A[i]);
  }
  return maxProfit;
};

export default solution;
