import solution from '../src/distinctValues';

describe('DistinctValues', function () {
  it('should return number of distinct values in array ', () => {
     expect(solution([1,2,5,3,3,4,5])).to.equal(5);
  });

  it('should solve codility example', () => {
     expect(solution([2,1,1,2,3,1])).to.equal(3);
  });

  it('single item', () => {
     expect(solution([1])).to.equal(1);
  });

  it('single item repeated', () => {
     expect(solution([1,1])).to.equal(1);
  });

  it('minus numbers', () => {
     expect(solution([-1,-2])).to.equal(2);
  });
});