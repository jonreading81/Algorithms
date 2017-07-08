const solution = function (A) {
  let p;
  let q;
  let r;
  let count = 0;

  A.sort((a, b) => a - b);
  for (p = 0; p < A.length - 2; p++) {
    q = p + 1;
    r = p + 2;
    while (r < A.length) {
      if (A[p] + A[q] > A[r]) {
        console.log(r - q);
        count += r - q;
        r++;
      } else {
        q++;
        if (r === q) {
          r++;
        }
      }
    }
  }
  return count;
};

export default solution;
