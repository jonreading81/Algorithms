function solution(A) {
  let i = 0;
  let j = 0;
  let result = Array(A.length).fill(-Infinity);

  result[0] = A[0];
  for (i = 1; i < A.length; i++) {
    for (j = Math.max(0, i - 6); j < i; j++) {
      result[i] = Math.max(result[i], result[j] + A[i]);
    }
  }
  return result[result.length - 1];
}

export default solution;
