import solution from '../src/frogJump';

describe('Frog Jump', function () {
  it('should round up', function () {
    expect(solution(10,85,30)).to.equal(3);
  });
});