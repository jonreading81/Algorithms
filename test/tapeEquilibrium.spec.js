import solution from '../src/tapeEquilibrium';

describe('Tape Equlibrium', function () {
  
  it('should solve codility example', function () {
    expect(solution([3, 1, 2, 4, 3])).to.equal(1);
  });

  it('should cope with negatives', function () {
    expect(solution([3, 1, 2, 4, -7])).to.equal(3);
  });

   it('should cope with 2 elements', function () {
    expect(solution([1,4])).to.equal(3);
  });

   it('should cope with 2 negative elements', function () {
    expect(solution([-1,4])).to.equal(5);
  });
});