const gcd = function (a, b) {
  let result;

  if (a % b === 0) {
    result = b;
  } else {
    result = gcd(b, a % b);
  }
  return result;
};

const lcm = function (a, b) {
  return (a * b) / gcd(a, b);
};

const solution = function (n, m) {
  return lcm(n, m) / m;

};

export default solution;
