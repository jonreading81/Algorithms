import solution from '../src/binaryGap';

describe('Binary Gap', function () {
  it('should return 2 for 9 1001', function () {
    expect(solution(9)).to.equal(2);
  });

  it('should return 4 for 529 1000010001', function () {
    expect(solution(529)).to.equal(4);
  });

  it('should return 1 for 20 10100', function () {
    expect(solution(20)).to.equal(1);
  });

  it('should return 0 for 1 1', function () {
    expect(solution(1)).to.equal(0);
  });

   it('should return 9 for 66561 10000010000000001', function () {
    expect(solution(66561)).to.equal(9);
  });

  

   
});