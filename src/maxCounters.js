export default function solution(N, A) {
  let counters = Array(N).fill(0);
  let maxCounter = 0;
  let maxValue = 0;
  let value;
  let index;

  for (let i = 0; i < A.length; i++) {
    value = A[i];
    index = value - 1;
    if (value <= N) {
      counters[index] = Math.max(maxCounter, counters[index]);
      counters[index]++;
      maxValue = Math.max(maxValue, counters[index]);
    } else {
      maxCounter = maxValue;
    }
  }
  counters = counters.map(value => Math.max(maxCounter, value));
  return counters;
}
