export default function solutionFast(A) {
  let leftSums = [];
  let rightSums = [];
  let index;
  let count;
  let diff;
  let minDiff;

  count = 0;
  for(index = 0; index < A.length -1; index ++){
    count += A[index];
    leftSums[index] = count;
  }

  count = 0;
  for(index = A.length -1; index > 0; index --){
    count += A[index];
    rightSums[index - 1] = count;
  }

  for(index = 0; index < leftSums.length; index ++){
    diff = Math.abs(leftSums[index] - rightSums[index]);
    if (typeof(minDiff) === "undefined") {
      minDiff = diff;
    }else{
      minDiff = Math.min(diff, minDiff);
    }
  }
  return minDiff;
}


function solutionSlow (A){
  let minDiff ;
  let diff;
  let leftSum = 0;
  let rightSum = 0;
  let rightIndex;
  let leftIndex;

  for(leftIndex = 0; leftIndex + 1 < A.length; leftIndex++){
    leftSum += A[leftIndex];

    rightSum = 0;
    for(rightIndex = leftIndex + 1; rightIndex < A.length; rightIndex ++) {
      rightSum += A[rightIndex];
    }

    diff =  Math.abs(rightSum - leftSum);

    if (typeof(minDiff) === "undefined") {
      minDiff = diff;
    }else{
      minDiff = Math.min(diff, minDiff);
    }
    console.log('diff', diff);

  };

  return minDiff;
}