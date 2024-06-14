/* This file contains various tips and tricks for Javascript
*/

// Finding unique values/remove duplicates in an array -> using ...new Set and Array.from
const arrayOfNumbers = [1, 2, 3, 4, 5, 1, 3, 4, 5];
const uniqueArrayOfNumbers = [...new Set(arrayOfNumbers)];
console.log(uniqueArrayOfNumbers);

const arrayOfStrings = ["apple", "orange", "grapes", "mango", "apple", "orange", "grapes", "mango"];
const uniqueArrayOfStrings = Array.from(new Set(arrayOfStrings));
console.log(uniqueArrayOfStrings);   

//Remove falsy values from an array
const arrayWithFalsyValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "", "0", null, undefined, NaN, false];
console.log(arrayWithFalsyValues.filter(Boolean));

//check if array is empty or not
let emptyArray = [];
console.log(Array.isArray(emptyArray));
console.log(emptyArray.length === 0);

//check if array has a specific value
let objectArray = [1, 2, 3, 4, 5, "apple", "orange", "grapes", "mango"];
console.log(objectArray.includes(3));
console.log(objectArray.includes("apple"));

//Array to String
const arrayToString = ["apple", "orange", "grapes", "mango"];
console.log(arrayToString.join(" "));

//Make copy of an array
const copiedArray =[...arrayToString];
console.log(`Copied array is - ${copiedArray}`);

//Truncate an array
const truncatedArray = copiedArray.slice(0, 2);
console.log(`Truncated array is - ${truncatedArray}`);

//Get last item in an array
console.log(`Last item in truncated array is ${truncatedArray.slice(-1)}`);

//Number to String -> using String()

const numberValue = 10;
console.log(`Value is ${numberValue} and its datatype is ${typeof numberValue}`);
const numberToStringValue =String(numberValue);
console.log(`Value is ${numberToStringValue} and its datatype is ${typeof numberToStringValue}`);


//String to Number -> Using Number(), parseInt(), parseFloat()

const stringValue = "200";
console.log(`Value is ${stringValue} and its datatype is ${typeof stringValue}`);
const stringToNumberValue = Number(stringValue);
console.log(`Value is ${stringToNumberValue} and its datatype is ${typeof stringToNumberValue}`);

const stringToNumberValueUsingParseInt = parseInt(stringValue);
console.log(`After using parseInt, Value is ${stringToNumberValueUsingParseInt} and its datatype is ${typeof stringToNumberValueUsingParseInt}`);

const stringValueWithDecimal = "200.52";
console.log(`Before using parseFloat, Value is ${stringValueWithDecimal} and its datatype is ${typeof stringValueWithDecimal}`);
const stringToNumberValueUsingParseFloat = parseFloat(stringValueWithDecimal);
console.log(`After using parseFloat, Value is ${stringToNumberValueUsingParseFloat} and its datatype is ${typeof stringToNumberValueUsingParseFloat}`);

//generating a random number between a range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}   
const randomNumber = getRandomNumber(1, 10);
console.log(randomNumber);

//check if a variable is a number
const numberVariable = 10;
if(typeof numberVariable === "number" && !isNaN(numberVariable)) {
    console.log(`Variable is a number`);
}

//check if a variable is a string
const stringVariable = "Hello World";
if(typeof stringVariable === "string" ) {
    console.log(`Variable is a string`);
}

//swapping values in JavaScript
let x = 10;
let y = 20;
console.log(`Before swapping, x = ${x} and y = ${y}`);
[x, y] = [y, x];
console.log(`After swapping, x = ${x} and y = ${y}`);

//ToUpperCase and toLowerCase
const stringToLowerCase = "Hello World";
console.log(stringToLowerCase.toLowerCase());
const stringToUpperCase = "Hello World";
console.log(stringToUpperCase.toUpperCase());


//check if an object has a specific property
const person = {
    name : "John",
    age : 30
};

function checkPropertyPresentTypeA(propertyName){
    if(person.hasOwnProperty(propertyName)) {
        console.log(`Person has ${propertyName} property`);
    }
    else{
            console.log(`Person does not have ${propertyName} property`);
        }
}
checkPropertyPresentTypeA("name");

function checkPropertyPresentTypeB(propertyName){
    if(propertyName in person) {
        console.log(`Person has ${propertyName} property`);
    }
    else{
            console.log(`Person does not have ${propertyName} property`);
        }
    }
    checkPropertyPresentTypeB("age");

//retrieve all properties of an object or Object to Array
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));


//get a specific object property value
console.log(person["age"]);

//make copy of an object
const copiedPerson = {...person};
console.log(copiedPerson);

//get current date and time
const date = new Date();
console.log(date.toLocaleString());







    




