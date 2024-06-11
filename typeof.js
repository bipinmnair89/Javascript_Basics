// This file contains examples of typeof operator

let a = 10;
console.log(typeof(a));

let stringValue = "Hello";
console.log(typeof(stringValue));

let booleanValue = true;
console.log(typeof(booleanValue));

let undefinedValue;
console.log(typeof(undefinedValue));

let nullValue = null;
console.log(typeof(nullValue));  //will return type as object

let arrayValue = [1, 2, 3, 4, 5];
console.log(typeof(arrayValue)); // will return type as object

const testFunction =  function() {
        console.log("test function");
 }
 console.log(typeof(testFunction));

 const testObject =  {
        name: "John",
        age: 30
 }
 console.log(typeof(testObject));

 