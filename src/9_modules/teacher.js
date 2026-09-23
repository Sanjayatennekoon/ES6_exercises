import { Person } from "./person";

export class Teacher extends Person {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  teach() {
    console.log("Teach");
  }
}
