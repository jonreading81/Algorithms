import solution from '../src/equiLeader';

describe('equiLeader', function () {
  it('should solve codility example', function () {
    const A = [4,3,4,4,4,2];
    expect(solution(A)).to.equal(2);
    
  });

  it('2 Values same', function () {
    const A = [4,4];
    expect(solution(A)).to.equal(1);
  });

  it('0 values', function () {
    const A = [0, 0];
    expect(solution(A)).to.equal(1);
  });
    
    
});