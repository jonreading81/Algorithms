import solution from '../src/missingInteger';

describe('Missing Integer', function () {
  it('should return single missing integer', function () {
    expect(solution([1,2,3,4,1,6])).to.equal(5);
  });

  it('should return single missing integer from short array', function () {
    expect(solution([1,1])).to.equal(2);
  });

  it('should return 0  if nothing missing', function () {
    expect(solution([1,2])).to.equal(3);
  });

  it('should return 1 for single element', function () {
    expect(solution([4])).to.equal(1);
  });


  it('should return 2 for single element', function () {
    expect(solution([1])).to.equal(2);
  });

});