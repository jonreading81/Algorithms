const solution = function (A) {
  let start = 0;
  let end = A.length - 1;
  let minSum = 10000000000;
  let sum;

  A.sort((a, b) => a - b);
  while (start <= end) {
    sum = A[start] + A[end];
    minSum = Math.min(Math.abs(sum), minSum);
    if(sum <= 0){
      start++;
    } else {
      end --;
    }
  }
  return minSum;
};

export default solution;
