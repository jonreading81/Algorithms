export default function solution(A) {
  let register = {};

  A.forEach((item, index) => {
    if (!register.hasOwnProperty(item)) {
      register[item] = true;
    }
  });

  for (let i = 1; i <= A.length; i++) {
    if (!register.hasOwnProperty(i)) {
      return 0;
    }
  }

  return 1;
}
