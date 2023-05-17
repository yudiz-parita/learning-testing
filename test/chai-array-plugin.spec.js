const chai = require('chai');
const chaiArrays = require('chai-arrays');

chai.use(chaiArrays);

const expect = chai.expect;

describe('Array Assertions', () => {
    it('should check if an array contains a specific element', () => {
      const arr = [1, 2, 3];
  
      expect(arr).to.be.array().that.includes(2);
      expect(arr).to.be.an('array').that.does.not.include(4);
    });
  
    it('should check if an array is sorted in ascending order', () => {
      const arr = [1, 2, 3, 4];
  
      expect(arr).to.be.sorted();
    });
  
    it('should check if an array has a specific length', () => {
      const arr = [1, 2, 3];
  
      expect(arr).to.have.lengthOf(3);
      expect(arr).to.be.ofSize(3);
    });
  });
  