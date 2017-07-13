const getFibSquenceUpTo = function (max) {
  let fib = [0, 1];

  while (fib[fib.length - 1] <= max) {
    fib[fib.length] = fib[fib.length - 1] + fib[fib.length - 2];
  }
  return fib;
};

const solution = function (A) {
  // add leaf for end
  A.push(1);
  const MAX_VALUE = 100000;
  let fib = getFibSquenceUpTo(MAX_VALUE);
  let reachable = Array(A.length).fill(-1);
  let previousIndex;
  let curIndex;
  let curValue;

  fib.forEach((jump) => {
    if (A[jump - 1] === 1) reachable[jump - 1] = 1;
  });

  A.forEach((val, index) => {
    // ignore non leaves and exisiting paths
    if (A[index] === 0 || reachable[index] > 0) return;

    // get the optimal jump count to reach this leaf
    curIndex = -1;
    curValue = MAX_VALUE;
    fib.every((jump) => {
      previousIndex = index - jump;
      if (previousIndex < 0) return false;
      if (reachable[previousIndex] > 0 && curValue > reachable[previousIndex]) {
        curValue = reachable[previousIndex];
        curIndex = previousIndex;
      };
      return true;
    });

    if (curIndex !== -1) {
      reachable[index] = curValue + 1;
    }
  });
  return reachable[A.length - 1];
};

export default solution;
