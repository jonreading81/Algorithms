import solution from '../src/permCheck';

describe('Perm check', function () {

  it('should return 1  for perm in order', function () {
    expect(solution([1,2,3,4])).to.equal(1);
  });

  it('should return 0  for non perm ', function () {
    expect(solution([1,2,3,5])).to.equal(0);
  });

  it('should return 1  for perm not in order', function () {
    expect(solution([4,3,2,1])).to.equal(1);
  });

  it('should return 1  for perm with single item', function () {
    expect(solution([1])).to.equal(1);
  });

   it('should return 0 for non perm with single item', function () {
    expect(solution([2])).to.equal(0);
  });

});
