const solution = (A) => {
  let count = 0;
  let eastCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      eastCount++;
    } else {
      count = count + eastCount;
    }
    if (count > 1000000000) {
      count = -1;
      break;
    }
  }

  return count;
};

export default solution;
