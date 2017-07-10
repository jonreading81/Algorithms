import solution from '../src/tieRopes';

describe('tieRopes', function () {
  it('should solve codility example', function () {
    const A =[1,2,3,4,1,1,4];
    expect(solution(A, 4)).to.equal(3);
  });

  it('simple', function () {
    const A =[4];
    expect(solution(A, 4)).to.equal(1);
  });

  it('none', function () {
    const A =[4];
    expect(solution(A, 5)).to.equal(0);
  });

  it('last required', function () {
    const A =[4,1,3];
    expect(solution(A, 4)).to.equal(2);
  });
});
