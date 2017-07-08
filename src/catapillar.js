const solution = function (A, maxSum) {
  let front = 0;
  let back = 0;
  let total = 0;

  for (back = 0; back < A.length; back++) {
    while (front < A.length) {
      total += A[front];
      front++;
      if (total >= maxSum) return true;
    }
    total -= A[back];
  }
  return false;
};

export default solution;
