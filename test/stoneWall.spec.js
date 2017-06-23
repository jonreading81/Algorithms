import solution from '../src/stoneWall';

describe('stoneWall', function () {
  it('should solve codility example', function () {
    const A = [8, 8,5,7,9,8,7,4,8];
    expect(solution(A)).to.equal(7);
    
  });

  it('should solve single item', function () {
    const A = [8];
    expect(solution(A)).to.equal(1);
    
  });

  it('should solve all one item', function () {
    const A = [8,8,8];
    expect(solution(A)).to.equal(1);
    
  });
});