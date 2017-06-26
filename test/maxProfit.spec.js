import solution from '../src/maxProfit';

describe('maxProfit', function () {
  it('should solve codility example', function () {
    const A = [21011, 21123, 21366, 21013, 21367];
    expect(solution(A)).to.equal(356);
    
  });

  it('simple', function () {
    const A = [0, 10];
    expect(solution(A)).to.equal(10);
    
  });

  it('single day', function () {
    const A = [10];
    expect(solution(A)).to.equal(0);
    
  });

  it('loss', function () {
    const A = [100, 90];
    expect(solution(A)).to.equal(0);
    
  });
});
