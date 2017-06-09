import solution from '../src/countDiv';

describe('Count div', function () {

  it('should solve codility example ', function () {
    expect(solution(6, 11, 2)).to.equal(3);
  });

});