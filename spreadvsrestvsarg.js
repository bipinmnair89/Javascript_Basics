//This file is to understand the differences between spread operator, rest parameter and argument Objects


/*Spread Operator
    -> It is used to spread out the elements in an array, string, object
    -> Can be used to spread string to individual characters
    -> Can be used with arrays to combine two or more arrays.
    -> Can be used to merge two or more objects. If objects have same keys then the values will be merged.
    -> Can be used to pass arguments to a function
*/

let textString = "hello";
console.log([...textString]);

let arrayEvens = [0, 2, 4, 6, 8];
let arrayOdds = [1, 3, 5, 7, 9];
console.log([...arrayEvens, ...arrayOdds]);

let objectA = {
    name: "John",
    age: 30,
    city: "New York"
};
let objectB = {
    name: "Jane",
    age: 25,
    city: "London"
};
let objectC = {...objectA, ...objectB};
console.log(objectC);

function additionOfElements(a, b, c) {
    console.log(a + b + c);
}
let numberValues = [1, 2, 3];
additionOfElements(...numberValues);


/*Rest Parameter
    -> It is used to pass indefinite number of arguments as an array to a function
    -> It can be used along with defined parameters but then it must be at the end of the function declaration
    -> It can be used for function overloading
    -> Its a true array hence can be used with higher order functions - map, filter, reduce
    -> Can be used with arrow functions
*/

function browserDetails(browserName, ...browserSpecs) {
    console.log(`The browserName is ${browserName}`);
    console.log(`The browserSpecs are ${browserSpecs}`);
}
browserDetails('Chrome','Company - Google', 'Engine - Chromium', 'version - 115.0.0.0');
browserDetails('Edge','Company - Microsoft');

const browserArrowSpecs =(...browserSpecs) => { console.log(`The browserSpecs are ${browserSpecs}`); };
browserArrowSpecs('Edge','Company - Microsoft', 'Engine - Chromium', 'version - 2024.0.0.0');


/*Argument Objects
    -> It contains all the arguments provided to a function
    -> The function may not need parameters, still it can access the data if it is passed via arguments
    -> Not a true array, hence need to be converted to an array with methods like Array.from or using spread operator ...
    -> Cannot be used with arrow functions
*/  

const operatorProcessor = function() {
    const resultOfMultiplication = Array.from(arguments).map((a,b) => a*b);
    console.log(resultOfMultiplication);
    const resultOfAddition = [...arguments].reduce((accumulator, currentValue) => accumulator+currentValue, 0);
    console.log(resultOfAddition);
}
operatorProcessor(1,2,3,4,5);
