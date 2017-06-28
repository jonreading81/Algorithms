import solution from '../src/flags';

describe('Flags', function () {
  
  it('should solve codility example', function () {
    const heights = [1,5,3,4,3,4,1,2,3,4,6,2];
    expect(solution(heights)).to.equal(3);
    
  });
  it('one flag', function () {
    const heights = [1,2,1];
    expect(solution(heights)).to.equal(1);
    
  });

  it('no flag', function () {
    const heights = [1,1,1];
    expect(solution(heights)).to.equal(0);
    
  });
});