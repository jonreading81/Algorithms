export default function solution(A, X) {
  let register = {};
  let i;
  let item;
  let found = 0;

  for (i = 0 ; i < A.length; i++) {
    item = A[i];

    if (item <= X && !register.hasOwnProperty(item)) {
      register[item] = true;
      found++;
    }

    if (found === X) {
      return i;
    }
  };

  return -1;
}
