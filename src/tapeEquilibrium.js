export default function solutionFast(A) {
  const total = A.reduce((a, b) => a + b);
  let minDiff = Infinity;
  let leftTotal = 0;

  for (let i = 0; i < A.length - 1; i++) {
    leftTotal += A[i];
    minDiff = Math.min(minDiff, Math.abs(leftTotal - (total - leftTotal)));
  }
  return minDiff;
}
