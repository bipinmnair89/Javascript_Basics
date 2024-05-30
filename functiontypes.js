/* This file is to look into different types of functions in Javascript */

/*
    Function declaration
    Function expression
    Arrow function
    Immediately invoked function expression
    Function Constructor
    Generator function
    Higher Order Function
*/


/*Function Declaration
  -> Will always have a name
  -> Can or cannot have parameters
  -> Has hoisting capabilities - means can be invoked before it is declared
*/
const sum = addition(10, 20);
function addition(a, b) {
    return a + b;
}
console.log("Result of sum value by function declaration: "+sum);

/*Function Expression
  -> Can be anonymous or named
  -> Does not have hoisting capabilities - means cannot be invoked before it is declared
  -> require an explicit return statement
  -> Used primarily when functions are passed as arguments to another function (filter, map, reduce, IIFE etc)
*/

//function expression with mandatory return
const multiply = function(a,b) {
    return a*b;
}
const multiResult = multiply(10,20);
console.log("Result of multiply value by function expression: "+multiResult);

//function expression as callback function with filter method
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers =numbersArray.filter(function(number) {return number%2==0;});   
console.log("Result even number array by function expression: "+evenNumbers);


/*Arrow Function
  -> Cannot have a name hence anonymous
  -> Does not have hoisting capabilities - means cannot be invoked before it is declared
  -> when => has a single expression then an explicit return is not required
  -> when => has multiple expressions inside {} then an explicit return is required
  -> Used primarily when functions are passed as arguments to another function (filter, map, reduce, IIFE etc)
*/

//arrow function with single expression
const multiplyData = (a,b) => a*b;
const multiResultData = multiplyData(10,30);
console.log("Result multiply value by arrow function: "+multiResultData);


//arrow function as callback function with filter method
let oddNumbers  =numbersArray.filter(number => number%2!=0);                             
console.log("Result odd number array by arrow function: "+oddNumbers);

//arrow function with multiple expressions inside {}
const greaterNumber = (a,b) => { 
    if(a>b) {
    console.log("a is greater than b");}
    else { 
      console.log("b is greater than a");}
}
greaterNumber(10,20);


/*Immediately Invoked Function Expression
  -> Is defined and invoked at the same time, no need to explicitly call/invoke it
  -> Syntax of IIFE - Wrap the function in () and use another () at the end that invokes the function
  -> Both Function expression & Arrow function can be used inside IIFE
  -> Usage of IIFE - To have a new scope that works only within the IIFE and doesn't pollute the global scope
*/

//Basic IIFE with function expression and Arrow function
(function() {
  var localText = "I love Javascript";
  return console.log(localText);
})();

(() => {
  var localText = "I love Typescript";
  return console.log(localText);
})();
// console.log(localText); //will return undefined as scope of localText is only valid inside IIFE


//Parameterized IIFE(string) with function expression and Arrow function
(function(value1, value2) {
  const total = value1+value2;
  return console.log(total);
})(10,20);

((value1, value2) => {
  const total = value1+value2;
  return console.log(total);
})(10,30);

//Parameterized IIFE(Array of Strings) with function expression and Arrow function
let peopleNames = ["Ram", "Shyam", "Hari", "Sita"];
(function(peopleNames) {
  peopleNames.forEach((personName => console.log(personName)));
})(peopleNames);

((peopleNames) => peopleNames.forEach((personName => console.log(personName))))(peopleNames);


/*Function Constructor
  -> format  - new Function(arg1,arg2....argn, functionBody)
  -> usage - when function needs to be dynamically executed
  -> less commonly used compared to the above 4 types
*/

let value = new Function("a","b","return a*b");
console.log(value(10,20));


/*Generator Function
  -> A function that can be used as an iterator, that can be paused and resumed
  -> Syntax  - function* which indicates the function is a generator
             - yield keyword which is used to pause and resume, can also return a value
             - generator objects (next(), return(), throw())
*/

function* genFunction() {
  yield 1;
  yield 2;
  yield 3;
}
const generatorValue = genFunction();
console.log(generatorValue.next().value);
console.log(generatorValue.next().value);
console.log(generatorValue.next().value);

//using for in loop and accessing all the values in generator
for(let value of genFunction()) {
  console.log(value);
}


/*Higher Order Function
  -> takes one or more functions as arguments and can return a function
  -> map, filter and reduce are examples of higher order functions
*/

function addValue(a,b) {
  return a+b;
}

function subtractValue(a,b) {
  return a-b;
}

function multiplyValue(a,b) {
  return a*b;
}

function simpleHigherOrderFunction(functionName, a, b) {    //takes function as arguments
  return functionName(a,b);                                 //returns a function
}

console.log(simpleHigherOrderFunction(addValue, 10, 20));
console.log(simpleHigherOrderFunction(subtractValue, 10, 20));
console.log(simpleHigherOrderFunction(multiplyValue, 10, 20));









