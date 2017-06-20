const solution = function (A) {
  let register = {};
  let count = 0;

  A.forEach((value) => {
    if (!register.hasOwnProperty(value)) {
      register[value] = true;
      count++;
    }
  });

  return count;
};

export default solution;
