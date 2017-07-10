const solution = function (A, lengthRequired) {
  let count = 0;
  let curLen = 0;

  for (let i = 0 ; i < A.length; i++) {
    if (A[i] >= lengthRequired) {
      count++;
      curLen = 0;
    } else if (curLen + A[i] >= lengthRequired) {
      count++;
      curLen = 0;
    } else {
      curLen += A[i];
    }
  }
  return count;
};

export default solution;
