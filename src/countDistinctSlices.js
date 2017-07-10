const solution = function (n, A) {
  let front = 0;
  let back = 0;
  let found = [];
  let count = 0;

  for (back = 0; back < A.length; back++) {
    front = back;
    found = [];
    while (front < A.length) {
      found.push(A[front]);
      count++;
      if (count > 1000000000) {
        return 1000000000;
      }
      if (found.indexOf(A[front + 1]) === -1) {
        front++;
      } else {
        break;
      }
    }
    found.pop();
  }
  return count;
};

export default solution;
