import solution from '../src/countFactors';

describe('CountFactors', function () {
  it('should solve codility example', function () {
    expect(solution(24)).to.equal(8);
    
  });

  it('1', function () {
    expect(solution(1)).to.equal(1);
    
  });

  it('square root', function () {
    expect(solution(16)).to.equal(5);
    
  });
});