import solution from '../src/planks';

describe('Planks', function () {
  it('should solve codility example', function () {
    const A = [1,4,5,8];
    const B = [4,5,9,10];
    const C = [4,6,7,10,2]
    expect(solution(A,B,C)).to.equal(4);

  });

  it('simple', function () {
    const A = [1];
    const B = [2];
    const C = [2]
    expect(solution(A,B,C)).to.equal(1);

  });
});
