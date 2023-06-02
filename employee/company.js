class Company {
    constructor() {
      this.employees = [];
    }
  
    hireEmployee(employee) {
      this.employees.push(employee);
    }
  
    getEmployeePositions() {
      return this.employees.map(employee => employee.getPosition());
    }
    greetEmployees() {
      return this.employees.map(employee => employee.sayHello());
    }
  }
  module.exports = Company;