// This function is taking an function as argument and also returning a function.so its a higher order function
function operation(operatorFn, a, b) {
  return operatorFn(a, b);
}

function add(a, b) {
  return a + b;
}

const result = operation(add, 5, 20);
console.log(result);

// --------------------------------------------------->
// another type of higher order function is a function that only returns a function

function greetFn() {
  return function () {
    console.log("hi");
  };
}

const greet = greetFn();
greet();
