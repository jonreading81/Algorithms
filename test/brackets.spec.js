import solution from '../src/brackets';

describe('Brackets', function () {

  it('should return 1 for correctly nested string', function () {

    expect(solution('{[()()]}')).to.equal(1);
    
  });

  it('should return 0 for incorrectly nested string', function () {

    expect(solution('([)()]')).to.equal(0);
    
  });

  it('should ensure items our nested correctly', function () {

    expect(solution('([)]')).to.equal(0);
    
  });

  it('should fail on unknown characters', function () {

    expect(solution('**')).to.equal(0);
    
  });

  it('should pass on empty string', function () {

    expect(solution('')).to.equal(1);
    
  });
  
});