export default function solution(n) {
  const BINARY = n.toString(2);
  let maxCount = 0;
  let count = 0;
  let i = 0;
  let remainingLength = BINARY.length;
  let character;

  console.log('BINARY', BINARY);
  while (i < BINARY.length && maxCount < remainingLength + count) {
    console.log('i', i);
    console.log('char', BINARY.charAt(i));
    if (BINARY.charAt(i) === '1') {
      maxCount = Math.max(count, maxCount);
      count = 0;
    }else{
      count++;
    }
    i++;
    remainingLength --;
  }
  return maxCount;
}