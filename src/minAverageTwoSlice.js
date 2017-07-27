function Slice(pSums, start, end) {
    this.start = start;
    this.end = end;
    this.total = (start > 0) ? pSums[this.end] - pSums[this.start - 1] : pSums[this.end]
    this.avg = this.total / (this.end - this.start + 1);
}

function solution(A) {
  let pSums = [A[0]];
  for(let i = 1; i < A.length; i++) {
    pSums.push(pSums[i - 1] + A[i]);
  }
  let curSlice = new Slice(pSums, 0, 1);
  let minSlice =  Object.assign({}, curSlice);
  let tmpSlice;

  while(curSlice.end < A.length && curSlice.start < curSlice.end) {
    tmpSlice = new Slice(pSums, curSlice.start, curSlice.end +  1);
    if(tmpSlice.avg < curSlice.avg) {
      curSlice = Object.assign({}, tmpSlice)
    }else {
      curSlice = new Slice(pSums, curSlice.start + 1, curSlice.start + 2);
    }
    if(curSlice.avg < minSlice.avg){
      minSlice =  Object.assign({}, curSlice)
    }
  }
  return minSlice.start;
}

export default solution;
