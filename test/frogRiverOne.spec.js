import solution from '../src/frogRiverOne.js';

describe('Frog River one', function () {
  it('should return 6 for codility example', function () {
    expect(solution([1,3,1,4,2,3,5,4], 5)).to.equal(6);
  });

   it('should return -1 for non occuring item', function () {
    expect(solution([1,3,1,4,2,3,5,4], 6)).to.equal(-1);
  });

  it('should return 0 for correct single item', function () {
    expect(solution([1], 1)).to.equal(0);
  });

  it('should return -1 for incorrect single item', function () {
    expect(solution([3], 1)).to.equal(-1);
  });

  it('should perform quickly on large X value', function () {
    expect(solution([3], 100000)).to.equal(-1);
  });
});