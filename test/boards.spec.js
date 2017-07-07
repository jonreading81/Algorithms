import solution from '../src/boards';

describe('Boards', function () {
  it('should solve codility example', function () {
    expect(solution([1,1,0,1], 2)).to.equal(2.5);

  });
});
