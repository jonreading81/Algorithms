export default function solutionFast(A) {
  let leftSums = [];
  let rightSums = [];
  let index;
  let count;
  let diff;
  let minDiff;

  count = 0;
  for (index = 0; index < A.length - 1; index++) {
    count += A[index];
    leftSums[index] = count;
  }

  count = 0;
  for (index = A.length - 1; index > 0; index--) {
    count += A[index];
    rightSums[index - 1] = count;
  }

  for (index = 0; index < leftSums.length; index++) {
    diff = Math.abs(leftSums[index] - rightSums[index]);
    if (typeof minDiff === 'undefined') {
      minDiff = diff;
    } else {
      minDiff = Math.min(diff, minDiff);
    }
  }
  return minDiff;
}
