// var, let and const


console.log("****************************************************************************************************************************************************");

//var - has global/function scope, can be redeclared and reassigned, need not be initialized and will have default value as undefined
var firstValue ="Apple";
var firstValue ="Orange";
function testValue1() {
    var firstValue ="Banana";
    console.log(firstValue);
}
console.log(firstValue);
firstValue="Grapes";
testValue1();
console.log(firstValue);
console.log(typeof(firstValue));  //typeof used to know the datatype of the variable

var varTime =3;
if(varTime <3) {
    var msgV2 = "testing var global scope";
}
console.log(msgV2);  //will print even if msgV2 is inside if block because var is having global scope


var checkDefaultValue;
console.log("Default value of var is - "+checkDefaultValue);

console.log("****************************************************************************************************************************************************");

//let has global/block scope, can be reassigned but not redeclared, need not be initialized and will have default value as undefined
let secondValue="Lion";
// let secondValue="Monkey"; //let doesn't allow redeclaration but allows reassigning
secondValue="Tiger";
console.log(secondValue);
console.log(typeof(secondValue));

let letTime =3;
if(letTime <3) {
    let msgV2 = "testing let blocked scope";
}
// console.log(msgV2);  //will throw undefined error as msgV2 is inside if statement and cannot be accessed outside due to let having block scope

let checkDefaultLetValue;
console.log("Default value of let is - "+checkDefaultLetValue);

console.log("****************************************************************************************************************************************************");
//const has global/block scope, cant be neither redeclared nor reassigned, must be initialized during declaration

const flag = true;
console.log(flag);
console.log(typeof(flag));
console.log(!flag); //using NOT operator along with const

