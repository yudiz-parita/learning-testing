const sinon = require('sinon');
const assert = require('assert');


function add(a, b) {
  return a + b;
}

// Test case using a spy
describe('add function', () => {
  it('should correctly add two numbers', () => {
 
    const spy = sinon.spy(add);
   
    const result = spy(2, 3);
   
    
    // Verify the function was called with the expected arguments
    assert(spy.calledWith(2, 3));

    // Verify the function was called once            
    assert(spy.calledOnce);

    // Verify the result is correct
    assert.strictEqual(result, 5);

     // Verify the function was called exactly twice
     assert.strictEqual(spy.callCount, 1);
  });
});
