export default function solution(A) {
  let objRegister = {};
  let i = 0;
  let val;

  // count occurances
  for (i = 0; i < A.length; i++) {
    val = A[i];
    if (val <= A.length && !objRegister.hasOwnProperty(val)) {
      objRegister[val] = true;
    }
  }

  for (i = 1; i <= A.length + 1; i++) {
    if (!objRegister.hasOwnProperty(i)) {
      return i;
    }
  }

  return 0;
}
