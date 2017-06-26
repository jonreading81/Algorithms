import solution from '../src/maxSlice';

describe('MaxSlice', function () {
  
  it('should solve codility example', function () {
    const A = [3,2,-6,4,0];
    expect(solution(A)).to.equal(5);
    
  });

  it('single', function () {
    const A = [3];
    expect(solution(A)).to.equal(3);
    
  });

   it('negative', function () {
    const A = [-3];
    expect(solution(A)).to.equal(-3);
    
  });

  it('Small middle negative number', function () {
    const A = [3,2,-1,4,0];
    expect(solution(A)).to.equal(8);
    
  });

  it('negative number as first item', function () {
    const A = [-2, 1];
    expect(solution(A)).to.equal(1);
    
  });

  it('negative number with posative sum', function () {
    const A = [-2, 3];
    expect(solution(A)).to.equal(3);
    
  });

  it('negative number with posative sum', function () {
    const A = [-2, 3, 1];
    expect(solution(A)).to.equal(4);
    
  });

  it('2 negatives', function () {
    const A = [-2, -2];
    expect(solution(A)).to.equal(-2);
    
  });

  
});