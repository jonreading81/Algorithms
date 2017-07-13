import solution from '../src/MinAbsSumOfTwo';

describe('MinAbsSumOfTwo', function () {
  it('should solve codility example', function () {
    const A = [1,4,-3]
    expect(solution(A)).to.equal(1);

  });

  it('should solve codility example 2', function () {
    const A = [-8,4,5,-10,3]
    expect(solution(A)).to.equal(3);

  });
});
