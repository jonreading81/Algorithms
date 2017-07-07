function check(planksStart, planksEnd, nails, index) {
  let psNails = Array(nails.length * 2 + 1).fill(0);

  for (let i = 0; i < index; i++) {
    psNails[nails[i]]++;
  }
  for (let i = 1; i < psNails.length; i++) {
    psNails[i] += psNails[ i - 1];
  }
  for (let i = 0; i < planksStart.length; i++) {
    if (psNails[planksEnd[i]] <= psNails[planksStart[i] - 1]) return false;
  }
  return true;
}

const solution = function (planksStart, planksEnd, nails) {
  let begin = 0;
  let end = planksStart.length - 1;
  let result = -1;
  let mid;
  let nailsRequired;

  while (begin <= end) {
    mid = Math.floor((begin + end) / 2);
    nailsRequired = mid + 1;
    if (check(planksStart, planksEnd, nails, nailsRequired)) {
      end = mid - 1;
      result = nailsRequired;
    } else {
      begin = mid + 1;
    }
  }
  return result;
};

export default solution;
