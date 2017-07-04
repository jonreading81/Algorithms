import solution from '../src/ladder';

describe('Ladder', function () {
  it('codility example', function () {
    const A = [4,4,5,5,1];
    const B = [3,2,4,3,1];
    expect(solution(A, B)).to.deep.equal([5,1,8,0,1]);
  });

});
