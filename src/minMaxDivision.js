function tentativeLargeSumIsPossible(A, maxNumBlocks, tentativeLargeSum) {
  let curBlockSum = 0;
  let numBlocks = 1;

  for (let elem of A) {
    if (curBlockSum + elem <= tentativeLargeSum) {
      curBlockSum += elem;
    } else {
      numBlocks++;
      curBlockSum = elem;
    }
    if (numBlocks > maxNumBlocks) return false;
  }
  return true;
}

function binarySearch(maxNumBlocks, A) {
  let lowerBoundLargeSum = Math.max(...A);
  let upperBoundLargeSum = A.reduce((a, b)=> a + b);
  let result = -1;
  let tentativeLargeSum;

  while (lowerBoundLargeSum <= upperBoundLargeSum) {
    tentativeLargeSum = Math.floor((lowerBoundLargeSum + upperBoundLargeSum) / 2);
    if (tentativeLargeSumIsPossible(A, maxNumBlocks, tentativeLargeSum)) {
      result = tentativeLargeSum;
      upperBoundLargeSum = tentativeLargeSum - 1;
    } else {
      lowerBoundLargeSum = tentativeLargeSum + 1;
    }
  }
  return result;
}

function solution(K, M, A) {
  // M is a red herring
  return binarySearch(K, A);
}
export default solution;
