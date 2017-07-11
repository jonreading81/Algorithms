
const solution = function (A) {
  let lowerLimits = [];
  let upperLimits = [];
  let intersections = 0;
  let searchIntersections;
  let i;
  let j;
  const compare = (a, b) => a - b;

  A.forEach((radius, index) => {
    lowerLimits.push(index - radius);
    upperLimits.push(index + radius);
  });
  lowerLimits.sort(compare);
  upperLimits.sort(compare);

  console.log(lowerLimits);
  console.log(upperLimits);

  for (i = 0 ; i < A.length; i++) {
    j = 0;
    searchIntersections = -1;
    while (upperLimits[i] >= lowerLimits[j]) {
      j++;
      searchIntersections++;
    }
    intersections += searchIntersections - i;
    if (intersections > 10000000) return -1;
  }
  return intersections;
};
/*
const solutionSimple = function (A) {
  let i;
  let j;
  let intersections = 0;
  let circleA = {};
  let circleB = {};

  for(i = 0; i < A.length; i++) {
    circleA = {
      radius: A[i],
      centre: i
    };
    for(j = i + 1; j < A.length; j++) {
      circleB = {
        radius: A[j],
        centre: j
      };
      if (circleA.centre + circleA.radius >= circleB.centre - circleB.radius) {
        intersections++;
        if(intersections > 10000000) return -1;
      }

    }
  }
  return intersections;
}
*/

export default solution;
