import solution from '../src/minAverageTwoSlice';

describe('Min Average Two Slice', function () {
  it('should solve codility example', function () {
    const A = [4,2,2,5,1,5,8];
    expect(solution(A)).to.equal(1);
  });

  it('Negative number example', function () {
    const A = [-3, -5, -8, -4, -10];
    expect(solution(A)).to.equal(2);
  });
});
