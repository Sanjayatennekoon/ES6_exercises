function sanjaya() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i);
}
sanjaya();

//if we use var, then we can access it out of the block. It is the issue of var. Accessible in function scope.
//so in ES6 version we use let
//if we use const, it can't change the valuse.
