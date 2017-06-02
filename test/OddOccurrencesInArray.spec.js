import solution from '../src/OddOccurrencesInArray';

describe('Odd Occurrences In Array', function () {
	
	it('should return 3 for [1,1,3,4,5,4,5]', function() {
		expect(solution([1,1,3,4,5,4,5])).to.equal(3);
	});

	it('should return -1 for [1,1,3,4,5,4,5,3]', function() {
		expect(solution([1,1,3,4,5,4,5,3])).to.equal(-1);
	});

	it('should return 1 for [1]', function() {
		expect(solution([1])).to.equal(1);
	});

	it('should return index for 3 of any item]', function() {
		expect(solution([1,1,1,2,2])).to.equal(1);
	});

	it('should return -1 for 4 of any item]', function() {
		expect(solution([1,1,1,1,2,2])).to.equal(-1);
	});
	
});