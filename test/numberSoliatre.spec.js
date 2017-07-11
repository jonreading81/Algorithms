import solution from '../src/numberSolitare';

describe('numberSolitare', function () {
  it('should solve codility example', function () {
    const A = [1,-2,0,9,-1,-2]
    expect(solution(A)).to.equal(8);

  });
});
