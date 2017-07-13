const solution = function (A, B) {
  let fishStack = [];
  let lastFish;
  let currentFish;
  let i;

  for (i = 0 ; i < A.length; i++) {
    currentFish = {
      direction: B[i],
      size: A[i]
    };
    if (fishStack.length === 0) {
      fishStack.push(currentFish);
    } else {
      lastFish = fishStack[fishStack.length - 1];
      while (lastFish &&
        lastFish.direction === 1 && currentFish.direction === 0 &&
        lastFish.size < currentFish.size
        ) {
        fishStack.pop();
        lastFish = fishStack[fishStack.length - 1];
      }
      if (lastFish) {
        if (!(lastFish.direction === 1 && currentFish.direction === 0)) {
          fishStack.push(currentFish);
        }
      } else {
        fishStack.push(currentFish);
      }
    }
  }

  return fishStack.length;
};

export default solution;
