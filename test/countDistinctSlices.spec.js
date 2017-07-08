import solution from '../src/countDistinctSlices';

describe('CountDistinctSlices', function () {
  it('should solve codility example', function () {
    const A = [3,4,5,5,2];
    expect(solution(6, A)).to.equal(9);
  });

  it('simple', function () {
    const A = [1,0];
    expect(solution(2, A)).to.equal(3);
  });

  it('single', function () {
    const A = [1];
    expect(solution(2, A)).to.equal(1);
  });

  it('2 same', function () {
    const A = [1,1];
    expect(solution(2, A)).to.equal(2);
  });
});
