import solution from '../src/frogJumpFib';

describe('frogJumpFib', function () {
  it('should solve codility example', function () {
    const A = [0,0,0,1,1,0,1,0,0,0,0];
    expect(solution(A)).to.equal(3);
  });

  it('1 jump simple', function () {
    const A = [0];
    expect(solution(A)).to.equal(1);
  });

  it('1 jump simple long', function () {
    const A = [0,0,0,1,1,0,1,0,0,0,0,0];
    expect(solution(A)).to.equal(1);
  });

  it('2 jumps', function () {
    const A = [1, 1, 0, 0, 0];
    expect(solution(A)).to.equal(2);
  });

});
