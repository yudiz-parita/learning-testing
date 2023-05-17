const chai = require('chai');
const chaiJson = require('chai-json');

chai.use(chaiJson);

const expect = chai.expect;

describe('User JSON object', () => {
  it('should match the expected JSON object', () => {
    const expectedUser = {
      id: 1,
      name: 'parita',
      email: 'parita.ganatra@yudiz.com'
    };

    const actualUser = {
        id: 1,
        name: 'parita',
        email: 'parita.ganatra@yudiz.com'
    };

    
    expect(actualUser).to.deep.equal(expectedUser);
  });
});
