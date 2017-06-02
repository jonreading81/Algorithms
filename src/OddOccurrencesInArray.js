export default function solution(A) {
  let objRegister = {};
  let value;
  let i;

  for (i = 0; i < A.length; i++) {
    value = A[i];
    if (objRegister.hasOwnProperty(value)) {
      objRegister[value]++;
    } else {
      objRegister[value] = 1;
    }
  }
  for (i in objRegister) {
    value = objRegister[i];
    if (value % 2 !== 0) {
      return parseInt(i, 10);
    }
  }
  return -1;
}
