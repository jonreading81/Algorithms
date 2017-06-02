import solution from '../src/permMissingElem';

describe('perm Missing Elem', function () {

  it('ordered example', function () {

    expect(solution([1,2,4,5,6])).to.equal(3);
    
  });

  it('unordered example', function () {

    expect(solution([1,2,6,5,4])).to.equal(3);
    
  });

  it('empty', function () {

    expect(solution([1])).to.equal(2);
    
  });

  it('single', function () {

    expect(solution([])).to.equal(1);
    
  });

    
  
});