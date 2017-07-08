import solution from '../src/Catapillar';

describe('Catapillar', function () {
  it('simple true', function () {
    expect(solution([1,1,1], 3)).to.be.true;
  });

  it('simple false', function () {
    expect(solution([1,2,1], 5)).to.be.false;
  });
});
