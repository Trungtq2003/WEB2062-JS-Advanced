// LAB 7.1

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
  };
  
  Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  };
  
  const bmw = new Car('BMW', 120);
  const mercedes = new Car('Mercedes', 95);
  
  bmw.accelerate();
  bmw.accelerate();
  bmw.brake();
  bmw.accelerate();
  
  class PersonCl {
    constructor(fullName, birthYear) {
      this.fullName = fullName;
      this.birthYear = birthYear;
    }
  
    calcAge() {
      console.log(2037 - this.birthYear);
    }
  
    greet() {
      console.log(`Hey ${this.fullName}`);
    }
  
    get age() {
      return 2037 - this.birthYear;
    }
  
    set fullName(name) {
      if (name.includes(' ')) this._fullName = name;
      else alert(`${name} is not a full name!`);
    }
  
    get fullName() {
      return this._fullName;
    }
  
    static hey() {
      console.log('Hey there 👋');
      console.log(this);
    }
  }
  
  const jessica = new PersonCl('Jessica Davis', 1996);
  console.log(jessica);
  jessica.calcAge();
  console.log(jessica.age);
  
  console.log(jessica.__proto__ === PersonCl.prototype);
  
  jessica.greet();
  
  const walter = new PersonCl('Walter White', 1965);

  const account = {
    owner: 'Jonas',
    movements: [200, 530, 120, 300],
  
    get latest() {
      return this.movements.slice(-1).pop();
    },
  
    set latest(mov) {
      this.movements.push(mov);
    },
  };
  
  console.log(account.latest);
  
  account.latest = 50;
  console.log(account.movements);
  
  const PersonProto = {
    calcAge() {
      console.log(2037 - this.birthYear);
    },
  
    init(firstName, birthYear) {
      this.firstName = firstName;
      this.birthYear = birthYear;
    },
  };
  
  const steven = Object.create(PersonProto);
  console.log(steven);
  steven.name = 'Steven';
  steven.birthYear = 2002;
  steven.calcAge();
  
  console.log(steven.__proto__ === PersonProto);
  
  const sarah = Object.create(PersonProto);
  sarah.init('Sarah', 1979);
  sarah.calcAge();
  