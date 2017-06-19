const solution = function (A) {
  let minSlice = {
    left: 0,
    right: 1,
    sum: A[0] + A[1]
  };
  let tmpSlice;
  let workingSlice;

  minSlice.avg = minSlice.sum / 2;
  workingSlice = Object.assign({length: 2}, minSlice);

  while (workingSlice.right < A.length && workingSlice.left < A.length - 1) {

    tmpSlice = Object.assign({}, workingSlice);
    tmpSlice.right ++;
    tmpSlice.length ++;
    tmpSlice.sum += A[tmpSlice.right];
    tmpSlice.avg = tmpSlice.sum / tmpSlice.length;
    if (workingSlice.avg > tmpSlice.avg) {
      workingSlice = Object.assign({}, tmpSlice);
      if (workingSlice.avg < minSlice.avg) {
        minSlice = Object.assign({}, workingSlice);
      }

    } else {
      workingSlice.left ++;
      workingSlice.right = workingSlice.left + 1;
      workingSlice.sum = A[workingSlice.left] + A[workingSlice.right];
      workingSlice.length = 2;
      workingSlice.avg = workingSlice.sum / workingSlice.length;
      if (workingSlice.avg < minSlice.avg) {
        minSlice = Object.assign({}, workingSlice);
      }
    }
  }
  return minSlice.left;
};

export default solution;
