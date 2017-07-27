import Lazy from '../src/Lazy';

function timesTwo(a) {
  return a * 2;
}

function plus(a, b) {
  return a + b;
}

describe('YLD', function () {

  it('simple', function () {
    const computation = new Lazy();
    computation.add(timesTwo)
    expect(computation.evaluate([1])).to.deep.equal([2]);
  });

  it('2 methods', function () {
    const computation = new Lazy();
    computation.add(timesTwo);
    computation.add(timesTwo);
    expect(computation.evaluate([1])).to.deep.equal([4]);

  });

  it('Simple Arguments', function () {
    const computation = new Lazy();
    computation.add(plus, 1)
    expect(computation.evaluate([1])).to.deep.equal([2]);

  });
  it('Different methods and arguments', function () {
    const computation = new Lazy();
    computation.add(timesTwo)
    computation.add(plus, 1)
    expect(computation.evaluate([1, 2, 3])).to.deep.equal([3, 5, 7]);
  });

  it('Chain add method', function () {
    const computation = new Lazy();
    computation.add(timesTwo).add(plus, 1);
    expect(computation.evaluate([1, 2, 3])).to.deep.equal([3, 5, 7]);
  });


});
