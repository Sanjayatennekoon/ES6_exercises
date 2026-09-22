//ES6 we have .map method
const colors = ["red", "blue", "yellow"];
const color = colors.map(function (color) {
  return "<li>" + color + "</li>";
});
console.log(color);

// The clean code as below
const colors1 = ["red", "blue", "yellow"];
const color1 = colors1.map((color) => `<li>${color}</li>`);
console.log(color1);
