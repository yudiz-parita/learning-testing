const { expect } = require('chai');


describe('describe function run first', () => {
  before(() => {
    console.log('Runs once before  tests');
  });

  beforeEach(() => {
    console.log('Runs before each test');
  });

  after(() => {
    console.log('Runs once after  tests');
  });

  afterEach(() => {
    console.log('Runs after each test');
  });

    
  it('Test 1', () => {
    expect(1 + 1).to.equal(2);
  });
 
  it('Test 2', () => {
    expect(3 - 1).to.equal(2);
  });

  it('Test 3', () => {
    expect(4 * 2).to.equal(8);
  });
});

describe('ComplexTestSuite', () => {
    let counter = 0;
  
    before(() => {
      console.log('OUTER Running before hook');
    });
  
    beforeEach(() => {
      console.log('OUTER Running beforeEach hook');
      counter = 0;
    });
  
    after(() => {
      console.log('OUTER Running after hook');
    });
  
    afterEach(() => {
      console.log('OUTER Running afterEach hook');
    });
  
    describe('Nested Test Suite', () => {
      before(() => {
        console.log('INNER Running nested before hook');
      });
  
      after(() => {
        console.log('INNER Running nested after hook');
      });
  
      afterEach(() => {
          console.log('INNER Running afterEach hook');
        });
  
      it('Test 1', () => {
        console.log('Running test 1');
        counter += 1;
        expect(counter).to.equal(1);
      });
  
      it('Test 2', () => {
        console.log('Running test 2');
        counter += 2;
        expect(counter).to.equal(2);
      });
    });
  
    it('Test 3', () => {
      console.log('Running test 3');
      counter += 3;
      expect(counter).to.equal(3);
    });
  });

  //Chai provides several plugins that extend its functionality and allow you to use additional assertions or matchers. These plugins can be used alongside Chai's core assertions to enhance your testing capabilities. 





