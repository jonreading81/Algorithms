import solution from '../src/peak';

describe('Peak', function () {
  it('should solve codility example', function () {
    const A = [1,2,3,4,3,4,1,2,3,4,6,2]
    expect(solution(A)).to.equal(3);

  });


  it('no peak', function () {
    const A = [1,2,3,4]
    expect(solution(A)).to.equal(0);

  });

   it('1 peak', function () {
    const A = [1,2,3,2]
    expect(solution(A)).to.equal(1);

  });
});
