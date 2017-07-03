import solution from '../src/chocolateByNumbers';

describe('chocolateByNumbers', function () {
  it('should solve codility example', function () {
    expect(solution(10, 4)).to.equal(5);

  });

  it('simple', function () {
    expect(solution(10, 5)).to.equal(2);

  });
});
