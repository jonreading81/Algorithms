export default function solution(A) {
  const N = A.length + 1;
  let expectedSum = (N * (N + 1)) / 2;
  let sum;

  if(A.length < 1 ){
    return 1;
  }

  sum= A.reduce((total, num) => total + num);
  return expectedSum - sum;
}
