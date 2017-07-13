import solution from '../src/commonPrimeDivisors';

describe('commonPrimeDivisors', function () {
  it.only('should solve codility example', function () {
    const A = [15, 10, 3];
    const B = [75,30, 5];

    expect(solution(A, B)).to.equal(1);

  });

  it('simple', function () {
    const A = [1];
    const B = [1];

    expect(solution(A, B)).to.equal(1);

  });

  it('simple 2', function () {
    const A = [2,1,2];
    const B = [1,2,2];

    expect(solution(A, B)).to.equal(1);

  });
});
