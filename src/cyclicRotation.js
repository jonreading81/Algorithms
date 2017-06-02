export default function solution(A, N) {
  let i;
  let index;
  let result = [];

  N = N % A.length;
  
  for (i = 0; i < A.length; i++) {
    index = i + N;
    if (index >= A.length) {
      index = index - A.length;
    }
    result[index] = A[i];
  }
  return result;
}


