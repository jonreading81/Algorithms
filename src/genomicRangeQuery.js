const solution = function (s, p, q) {
  const impactForces = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  };
  const prefixSumsOccurances = {
    A: [],
    C: [],
    G: [],
    T: []
  };
  let i;
  let result = [];
  let letter;
  let leftPos;
  let rightPos;
  let leftSum;
  let rightSum;
  let occurances;

  for (letter in prefixSumsOccurances) {
    occurances = 0;
    for (i = 0; i < s.length; i++) {
      if (s.charAt(i) === letter) {
        occurances++;
      }
      prefixSumsOccurances[letter].push(occurances);
    }
  };

  for (i = 0; i < p.length; i++) {
    leftPos = p[i];
    rightPos = q[i];
    for (letter in prefixSumsOccurances) {
      leftSum = (leftPos === 0) ? 0 : prefixSumsOccurances[letter][leftPos - 1];
      rightSum = prefixSumsOccurances[letter][rightPos];
      if (rightSum - leftSum > 0) {
        result.push(impactForces[letter]);
        break;
      }
    }
  }
  return result;
};

export default solution;
