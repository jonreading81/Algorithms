import solution from '../src/anagram';

describe('Anagram', function () {
  it('simple', function () {
    expect(solution('ab', 'ba')).to.equal(true);

  });
  it('simple 2', function () {
    expect(solution('ab', 'ab')).to.equal(true);

  });
  it('different letters', function () {
    expect(solution('ab', 'ac')).to.equal(false);

  });

  it('extra letter', function () {
    expect(solution('ab', 'bac')).to.equal(false);

  });

  it('empty b', function () {
    expect(solution('ab', '')).to.equal(false);

  });

});
