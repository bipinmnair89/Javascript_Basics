/* This file is to look into different types of functions in Javascript */

/*
    Function declaration
    Function expression
    Arrow function
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
let evenNumbers =numbersArray.filter(function(number) {return number%2==0;});    //filter method using function expression
console.log("Result even number array by function expression: "+evenNumbers);


/*Arrow Function
  -> Cannot have a name
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



