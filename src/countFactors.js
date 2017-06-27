const solution = function (n) {
  let a = 1;
  let b = n;
  let count = 0;

  while (a * a <= n) {
    b = Math.floor(n / a);
    if (a * b === n) {
      if (a === b) {
        count++;
      } else {
        count = count + 2;
      }
    }
    a++;

  }
  return count;

};

export default solution;
