const sinon = require('sinon');
const { expect } = require('chai');
const Company = require('../employee/company');
const Employee = require('../employee/employee');

describe('stub example', () => {
  it('should return the correct employee positions using stub', () => {
    const company = new Company();
    const employee1 = new Employee('isha lakhani', 'Manager');
    const employee2 = new Employee('parita ganatra', 'Developer');

    company.hireEmployee(employee1);
    company.hireEmployee(employee2);

    const getPositionStub = sinon.stub(employee2, 'getPosition').returns('Mocked position');
   const positions = company.getEmployeePositions();

    expect(positions).to.deep.equal(['Manager', 'Mocked position']);
    expect(getPositionStub.calledOnce).to.be.true;

    getPositionStub.restore(); // Restore the original method
  });
});
describe('Mock example', () => {
  it('should return the correct employee greetings using mock', () => {
    const company = new Company();
    const employee1 = new Employee('isha lakhani', 'Manager');
    const employee2 = new Employee('parita ganatra', 'Developer');

    company.hireEmployee(employee1);
    company.hireEmployee(employee2);

    const mockSayHello1 = sinon.mock(employee1);
    const mockSayHello2 = sinon.mock(employee2);

    mockSayHello1.expects('sayHello').once().returns('Mocked greeting');
    mockSayHello2.expects('sayHello').once().returns('Hello, my name is parita ganatra');

    const greetings = company.greetEmployees();

    expect(greetings).to.deep.equal(['Mocked greeting', 'Hello, my name is parita ganatra']);

    mockSayHello1.verify();
    mockSayHello2.verify();
    mockSayHello1.restore();
    mockSayHello2.restore();
  });
});

