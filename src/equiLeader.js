const getLeader = function (A) {
  const register = {};

  for (let i = 0 ; i < A.length; i++) {
    if (register.hasOwnProperty(A[i])) {
      register[A[i]]++;
    } else {
      register[A[i]] = 1;
    }
    if (register[A[i]] > A.length / 2) return A[i];
  }
  return -1;
};

const solution = function (A) {
  const leader = getLeader(A);
  let ldrCount = 0;
  let result = 0;
  let total = 0;
  let leaderRightCount;
  let i;

  for (i = 0; i < A.length; i++) {
    if (A[i] === leader) total++;
  }

  for (i = 0; i < A.length; i++) {
    if (A[i] === leader) ldrCount++;
    leaderRightCount = (total - ldrCount);
    if (ldrCount > Math.ceil(i / 2) && leaderRightCount > (A.length - 1 - i) / 2) {
      result++;
    }
  }
  return result;
};

export default solution;
