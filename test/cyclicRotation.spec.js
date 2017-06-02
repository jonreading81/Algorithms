import solution from '../src/cyclicRotation';

describe.only('Cyclic rotation', function () {
	it('should move array  2 positions', function () {
		expect(solution([1,2,3,4], 2)).to.deep.equal([3,4,1,2]);
		
	});

  it('should handle  N larger than Array length', function () {
    expect(solution([1,2,3,4], 6)).to.deep.equal([3,4,1,2]);
    
  });

  it('should handle small Array', function () {
    expect(solution([1], 6)).to.deep.equal([1]);
    
  });
	
});