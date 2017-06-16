import solution from '../src/genomicRangeQuery';

describe('Genomic Range Query', function () {
  
  it('should solve codility example', function () {

    const s = 'CAGCCTA';
    const p = [2, 5, 0];
    const q = [4, 5, 6];
    expect(solution(s ,p, q)).to.deep. equal([2 ,4, 1]);
    
  });
});
