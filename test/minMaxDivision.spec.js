import solution from '../src/minMaxDivision';

describe('minMaxDivision', function () {
  it('should solve codility example', function () {
    const A = [2,1,5,1,2,2,2];
    expect(solution(3, 5, A)).to.equal(6);

  });
});
