import solution from '../src/maxNonOverlappingSegments';

describe('maxNonOverlappingSegments', function () {

  it('should solve codility example', function () {
    const A = [1,3,7,9,9];
    const B = [5,6,8,9,10];
    expect(solution(A, B)).to.equal(3);

  });

  it('should return 0 for empty', function () {
    const A = [];
    const B = [];
    expect(solution(A, B)).to.equal(0);

  });

  it('should return 0 for empty', function () {
    const A = [0];
    const B = [0];
    expect(solution(A, B)).to.equal(1);

  });
});
