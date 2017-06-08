import solution from '../src/maxCounters';

describe('Max counters', function () {

  it('should solve codility example', function () {
    expect(solution(5, [3,4,4,6,1,4,4])).to.deep.equal([3,2,2,4,2])
  });

});