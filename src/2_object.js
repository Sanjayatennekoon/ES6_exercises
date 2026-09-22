//Object is a collection of key-value pairs.

const vehicle = {
  name: "car",
  //functions in the object called methods.
  start() {},
  stop() {},
};

//way of access object properties..
vehicle.start();
console.log(vehicle.name);
console.log(vehicle["name"]);

//can re-assign values..
vehicle["name"] = "van";

const targetVehcle = "name";
console.log(vehicle[targetVehcle]);
