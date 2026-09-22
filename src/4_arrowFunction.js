//Normal function below
function normal(number) {
  console.log("Normal function");
  return number * number;
}

//Arrow function below
const arrow = (number) => {
  console.log("Arrow function");
  return number * number;
};

//If single return line
const arrow1 = (number) => number * number;

const person = [
  { id: "1", isActive: "true" },
  { id: "2", isActive: "true" },
  { id: "3", isActive: "false" },
  { id: "4", isActive: "false" },
  { id: "5", isActive: "true" },
];

//Normal function
const activePerson = person.filter(function (person) {
  return person.isActive;
});

//Arrow function
const actPerson = person.filter((person) => person.isActive);

//"this" keyword and arrow functions
const vehicle = {
  start() {
    //if we use "this" in direct, then it return window object
    //this is the old way to fix this issue
    var self = this;
    setTimeout(function () {
      console.log("this", self);
    }, 1000);
  },
};
vehicle.start();

//arrow function don't rebind "this" keyword
//with arrow function, this issue can fix as below
const gun = {
  fire() {
    setTimeout(() => {
      console.log(this);
    }, 1000);
  },
};
gun.fire(); //this will return gun object referance.
