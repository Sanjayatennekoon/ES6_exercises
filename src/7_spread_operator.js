// Lets to it for an array
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);

//we can also add new values as below
const newArray = [...first, 0, ...second, 7, 8];
console.log(newArray);

//lets do it for an object
const firstObj = { id: "1", name: "john", age: "25" };
const secondObj = { job: "CEO" };

const combined1 = { ...firstObj, ...secondObj, location: "USA" };
console.log(combined1);
