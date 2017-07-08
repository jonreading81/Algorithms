import solution from '../src/countTriangles';

describe('countTriangles', function () {
  it('should solve codility example', function () {
    const A = [10,2,5,1,8,12];
    expect(solution(A)).to.equal(4);
  });
});
