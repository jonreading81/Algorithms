/*
const solutionSlow = function (A) {
  let blockStack = [];
  let blocks = 0;

  A.forEach((height) => {
    if (blockStack.indexOf(height) === -1) {
      blocks++;
      blockStack.push(height);
    }
    blockStack = blockStack.filter((item) => item <= height);
  });
  return blocks;
};
*/
const solution = function (A) {
  let blockStack = [];
  let blocks = 0;

  A.forEach((height) => {
    while (blockStack.length > 0 && height < blockStack[blockStack.length - 1]) {
      blockStack.pop();
      blocks++;
    }
    if (blockStack.length === 0 || height > blockStack[blockStack.length - 1]) {
      blockStack.push(height);
    }
  });
  return blocks + blockStack.length ;
};

export default solution;
