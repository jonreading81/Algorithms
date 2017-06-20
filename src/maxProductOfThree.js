const solution = function (A) {
  let optionA;
  let optionB;

  A.sort((a, b) => b - a);
  optionA = A[0] * A[1] * A[2];
  optionB = A[0] * A[A.length - 1] * A[A.length - 2];
  return Math.max(optionA, optionB) ;
};

export default solution;
