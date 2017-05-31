export default function solution(A) {
  let i;
  let j;
  let tmpSwapValue;
  let count = 0;

  for (i = 0; i < A.length; i++) {
    // check if swap required
    if (A[i] > A[i + 1]) {
      for (j = A.length - 1; j > i ; j--) {
        // check if swap postion found
        if (A[j] <= A[i + 1] && A[i] <= A[j + 1] && A[i] >= A[j - 1]) {
          // make swap
          tmpSwapValue = A[i];
          A[i] = A[j];
          A[j] = tmpSwapValue;
          count++;
          break;
        }
      }
    }
    if (count > 1) {
      return false;
    }
  }
  return true;
}
