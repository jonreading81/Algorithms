import solution from '../src/semiPrimes';

describe('semiPrimes', function () {
  it('should solve codility example', function () {
    const A = [1,4,16];
    const B = [26,10,20];
    const N = 26;
    expect(solution(N,A,B)).to.deep.equal([10,4,0]);

  });

  it('N = 4', function () {
    const A = [1];
    const B = [4];
    const N = 4;
    expect(solution(N,A,B)).to.deep.equal([1]);

  });
});
