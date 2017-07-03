const gcd = function (a, b) {
  let result;

  if (a % b === 0) {
    result = b;
  } else {
    result = gcd(b, a % b);
  }
  return result;
};

const hasSamePrimeDivisors = function (x, y) {
  const GCD_VALUE = gcd(x, y);
  let xGcd;
  let yGcd;

  while (x !== 1) {
    xGcd = gcd(x, GCD_VALUE);
    if (xGcd === 1) break;
    x = x / xGcd;
  }
  if (x !== 1) return false;

  while (y !== 1) {
    yGcd = gcd(y, GCD_VALUE);
    if (yGcd === 1) break;
    y = y / yGcd;
  }
  if (y !== 1) return false;
  return true;
};

const solution = function (A, B) {
  let count = 0;
  let i;

  for (i = 0; i < A.length; i++) {
    if (hasSamePrimeDivisors(A[i], B[i])) count++;
  }
  return count;
};

export default solution;
