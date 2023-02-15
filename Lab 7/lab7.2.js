// LAB 7.2

class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
  
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
  
    get speedUS() {
      return this.speed / 1.6;
    }
  
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }
  
  const ford = new CarCl('Ford', 120);
  console.log(ford.speedUS);
  ford.accelerate();
  ford.accelerate();
  ford.brake();
  ford.speedUS = 50;
  console.log(ford);

  
  const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  
  Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
  
  const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
  };
  
  Student.prototype = Object.create(Person.prototype);
  
  Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}`);
  };
  
  const mike = new Student('Mike', 2020, 'Computer Science');
  mike.introduce();
  mike.calcAge();
  
  console.log(mike.__proto__);
  console.log(mike.__proto__.__proto__);
  
  console.log(mike instanceof Student);
  console.log(mike instanceof Person);
  console.log(mike instanceof Object);
  
  Student.prototype.constructor = Student;
  console.dir(Student.prototype.constructor);