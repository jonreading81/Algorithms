import solution from '../src/maxProductOfThree';

describe('maxProductOfThree?', function () {

  it('should solve codility example', function () {
    expect(solution([-3,1,2,-2,5,6])).to.equal(60)
  });

  it('should solve example with negative multiplication max', function () {
    expect(solution([-10,1,2,-2,5,6])).to.equal(120)
  });

  it('should solve example with negative multiplication max', function () {
    expect(solution([-5, -6, -4, -7, -10])).to.equal(-120)
  });
  
});

