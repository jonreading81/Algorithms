export default function solution(A, N) {
  let index;
  let result = [];

  N = N % A.length;

  A.forEach((val, i) => {
    index = i + N;
    if (index >= A.length) {
      index = index - A.length;
    }
    result[index] = A[i];
  });
  return result;
}
