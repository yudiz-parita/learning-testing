class Employee {
    constructor(name, position) {
      this.name = name;
      this.position = position;
    }
  
    getPosition() {
      return this.position;
    }
    sayHello() {
      return `Hello, my name is ${this.name}`;
    }
  }
  module.exports = Employee;