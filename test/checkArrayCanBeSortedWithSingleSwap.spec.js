import  solution from "../src/checkArrayCanBeSortedWithSingleSwap";

describe("Check array can be sorted With single swap", function() {


  it("Simple Truthy Example 1,6,3,4,5,2,7", function() {
      expect(solution([1,6,3,4,5,2,7])).to.be.true;
  });

  it("Simple Falsy Example 1,6,4,3,5,2,7", function() {
      expect(solution([1,6,4,3,5,2,7])).to.be.false;
  });

  it("Already sorted Example 1,2,3,4,5", function() {
      expect(solution([1,2,3,4,5])).to.be.true;
  });

  it("Two items 1,1", function() {
      expect(solution([1,1])).to.be.true;
  });

  it("Single item 1", function() {
      expect(solution([1])).to.be.true;
  });

});
