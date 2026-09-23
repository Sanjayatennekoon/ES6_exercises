//class is a blueprint of an object. we can create a many objects using same class
//class name first letter should be capital
//class has a constructor

class Person {
  //if we need to customize the constructor we need to add it.
  // otherwise it will create default in background.
  constructor(name) {
    this.name = name;
  }
  walk() {
    console.log("walk");
  }
}
//can create person object as below
const person = new Person("jhone");
person.walk();
//in future if we found a bug we need single place to modify. this is the benifit of using classes.

//inheritance
class Teacher extends Person {
  //if we call child class constructor,
  //we should call the super class constructor and initiate value by using "super" keyword.
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  teach() {
    console.log("Teach");
  }
}

const teacher = new Teacher("Lahiru", "25");
teacher.teach();
