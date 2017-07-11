export default function solution(N, A) {
  let counters = Array(N).fill(0);
  let i = 0;
  let maxCounter = 0;
  let max = 0;
  let counterIndex;
  let val;

  for (i = 0; i < A.length; i++) {
    val = A[i] ;
    counterIndex = val - 1;

    if (val === N + 1) {
      maxCounter = max;

    } else if (val <= N) {

      if (counters[counterIndex] < maxCounter) {
        counters[counterIndex] = maxCounter;
      }
      counters[counterIndex]++;
      max = Math.max(max, counters[counterIndex]);
    }
  }
  
  for (i = 0; i < N; i++) {
    if (counters[i] < maxCounter) {
      counters[i] = maxCounter;
    }
  }
  return counters;
}
