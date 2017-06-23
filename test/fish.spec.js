import solution from '../src/fish';

describe('Fish', function () {
  it('should solve codility example', function () {
    const A = [4,3,2,1,5];
    const B = [0,1,0,0,0];
    expect(solution(A, B)).to.equal(2);
  });


  it('Single dowm stream', function () {
    const A = [6,3,2,1,5];
    const B = [1,0,0,0,0];
    expect(solution(A, B)).to.equal(1);
    
  });

  it('Single dowm upstream', function () {
    const A = [6,3,2,1,7];
    const B = [1,1,1,1,0];
    expect(solution(A, B)).to.equal(1);
    
  });
});
