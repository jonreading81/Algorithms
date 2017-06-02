export default function solution(n) {
  const BINARY = n.toString(2);
  let maxCount = 0;
  let count = 0;
  let i = 0;
  let remainingLength = BINARY.length;

  while (i < BINARY.length && maxCount < remainingLength + count) {
    if (BINARY.charAt(i) === '1') {
      maxCount = Math.max(count, maxCount);
      count = 0;
    } else {
      count++;
    }
    i++;
    remainingLength--;
  }
  return maxCount;
}
