function solution(A) {
  const EAST = 0;
  const MAX = 1000000000;

  let eastCount = 0;
  let passingCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === EAST) {
      eastCount++;
    } else {
      passingCount += eastCount;
      if (passingCount > MAX) return -1;
    }
  }
  return passingCount;
}
export default solution;
