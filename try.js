class Person {
  constructor(name) {
    this.name = name;
    this.age;
  }
}

const personOne = new Person('Lee');

personOne.age = 23;

console.log(personOne);
