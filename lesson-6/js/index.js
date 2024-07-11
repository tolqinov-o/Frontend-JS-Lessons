// function

function functionName(parameters) {
    // code to be executed
}

// example

function myFunction1(a, b) {
    return a * b;
}

console.log(myFunction1(2, 10));

// function 2 

const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(4, 3);

console.log(x);

//-----------

// function parameters

function functionName(parameter1, parameter2, parameter3) {
    // code to be executed
}

// example

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
}
  
let result = sum(4, 9, 16, 25, 29, 100, 66, 77);

console.log(result);

// 2

result1 = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
        max = arguments[i];
        }
    }
  return max;
}

console.log(result1);

// function 2

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
}

console.log(myObject.fullName());

// example

const myObject1 = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this;
    }
}
  
// This will return [object Object] (the owner object)
console.log(myObject1.fullName());

// 2

// This is a function constructor:
function myFunction3(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
}
  
// This creates a new object
const myObj = new myFunction3("John", "Doe");
  
// This will return "John"
console.log(myObj.firstName);