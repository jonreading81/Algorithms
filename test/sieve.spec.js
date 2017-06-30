import solution from '../src/sieve';

describe('Sieve', function () {

  it('should return prime numbers less that 19', function () {
    expect(solution(19)).to.deep.equal([2,3,5,7,11,13,17,19]);

  });
});
