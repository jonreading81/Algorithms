export default function solution(A) {
  let register = {};
  let count = 0;

  A.forEach((value, index) => {
    if (value <= A.length && !register.hasOwnProperty(value)) {
      register[value] = true;
      count++;
    }
  });
  return (count === A.length) ? 1 : 0;
}
