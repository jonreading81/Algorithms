export default function solution(A, X) {
  let register = {};
  let i;
  let item;
  let found = 0;

  console.log('ddd');
  console.log('found', 1, found);

  for (i = 0 ; i < A.length; i++) {
     console.log('found', 1, found);
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
