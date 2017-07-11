import solution from '../src/numberOfDiscIntersections';

describe('NumberOfDiscIntersections', function () {
  it('should solve codility example', function () {
    expect(solution([1,5,2,1,4,0])).to.equal(11);
  });

  it('should solve simple 3 small circles', function () {
    expect(solution([1,1,1])).to.equal(3);
  });

  it('should solve codility example', function () {
    expect(solution([1,1,1,0,0,4])).to.equal(9);
  });

});
