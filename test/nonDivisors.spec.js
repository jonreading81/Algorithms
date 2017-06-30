import solution from '../src/nonDivisors';

describe('nonDivisors', function () {
  it('should solve codility example', function () {
    const A = [3,1,2,3,6]
    expect(solution(A)).to.deep.equal([2,4,3,2,0]);

  });

  it('single item', function () {
    const A = [1]
    expect(solution(A)).to.deep.equal([0]);

  });

  it('simple', function () {
    const A = [6,1]
    expect(solution(A)).to.deep.equal([0,1]);
  });

  it('Same number', function () {
    const A = [2,2]
    expect(solution(A)).to.deep.equal([0,0]);
  });
});
