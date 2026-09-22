const person = {
  name: "Saman",
  walk() {
    console.log(this);
  },

  talk() {
    const nested = {
      name: "Rusiru",
      talk() {
        console.log(this);
      },
    };
    nested.talk(); //output -> nestes object
    const talk = nested.talk;
    talk(); //output -> window object (undifined)

    const talk1 = nested.talk.bind(person);
    talk1(); //output -> person object
  },
};

person.talk();

person.walk(); //output -> person object
const walk = person.walk;
walk(); //output -> window object (undefined)

// with bind method we can fixed the undefined issue
// every function in javascript is an object
const walk1 = person.walk.bind(person);
walk1(); // output -> person object
