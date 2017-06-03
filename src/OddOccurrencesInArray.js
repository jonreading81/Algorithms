export default function solution(A) {
  let objRegister = {};
  let value;

  A.forEach((value, index) => {
    if (objRegister.hasOwnProperty(value)) {
      objRegister[value]++;
    } else {
      objRegister[value] = 1;
    }
  });

  for (let i in objRegister) {
    value = objRegister[i];
    if (value % 2 !== 0) {
      return parseInt(i, 10);
    }
  }
  return -1;
}
