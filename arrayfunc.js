//common array functions in Javascript

//different ways of declaring an array in Javascript
let emptyArray = [];
let numbersArray = [1, 2, 3, 4, 5];
let stringFruitsArray = ["apple", "orange", "grapes", "mango"];

console.log("*******************************************************************************************************************************************************************");

//push method - to add one or more elements to the end of the array, returns the length of the array
let stringCarCompanyNames = ["Maruti", "Hyundai", "Tata"];
let updatedArrayLength=stringCarCompanyNames.push("BMW", "Benz","Audi");
console.log(updatedArrayLength);
console.log(stringCarCompanyNames);

//pop method - to remove last element from an array and returns the same. If array is empty then it returns undefined.
let removedCompanyName = stringCarCompanyNames.pop();
console.log(removedCompanyName);
console.log(stringCarCompanyNames);

let removedElement = emptyArray.pop();
console.log(removedElement);
console.log(emptyArray);

console.log("*******************************************************************************************************************************************************************");

//unshift method - to add one or more elements to the beginning of the array, returns the length of the array
updatedArrayLength = stringCarCompanyNames.unshift("Mahindra", "BYD");
console.log(updatedArrayLength);
console.log(stringCarCompanyNames);

//shift method - to remove an element from the beginning of the array and returns the same. If array is empty then it returns undefined.
removedCompanyName =stringCarCompanyNames.shift();
console.log(removedCompanyName);
console.log(stringCarCompanyNames);

removedElement = emptyArray.shift();
console.log(removedElement);
console.log(emptyArray);

console.log("*******************************************************************************************************************************************************************");

//splice method - to add or remove elements from an array, returns an array of deleted elements
let tataCars = ["Tiago", "Tigor", "Altroz", "Harrier", "Safari"];
let removedTataCars=tataCars.splice(1,2,"Punch", "Nexon");
console.log(removedTataCars);
console.log(tataCars);
removedTataCars=tataCars.splice(0,1,"Tiago EV", "Punch EV", "Nexon EV");
console.log(removedTataCars);
console.log(tataCars);

//slice method - to copy elements from an array, negative numbers can be used to specify the ending index. -1 specifies the last element and then slice copies till the second last element
let newTataCars=tataCars.slice(3,-1);
console.log(newTataCars);

//split method - to split a string into an array
const stringFruitsToArr = "apple-orange-grapes-mango";
const fruitsArr =stringFruitsToArr.split('-');
console.log(fruitsArr);
const stringFruitToChar = "apple";
const charArr =stringFruitToChar.split('');
console.log(charArr);


const word = "hello";

const characters = word.split('');

console.log(characters);

console.log("*******************************************************************************************************************************************************************");

//concat method - to merge two or more arrays
console.log(tataCars);
console.log(newTataCars);
let allTataCars=tataCars.concat(newTataCars);
console.log(allTataCars);

//sort method - to sort the elements of an array
tataCars.sort();
console.log(tataCars);

//reverse method - to reverse the elements of an array
tataCars.reverse();
console.log(tataCars);

//indexOf method - to find the index of an element in an array
let mainIndexArray =["nile", "ganga", "yamuna","amazon","nile"];
let firstIndexPosition = mainIndexArray.indexOf("nile");
console.log(firstIndexPosition);
console.log(mainIndexArray.indexOf("nile",firstIndexPosition+1));

//lastIndexOf method - to find the last index of an element in an array
let lastIndexPosition =mainIndexArray.lastIndexOf("nile");
console.log("last index position - "+lastIndexPosition);


//includes method - to check if an element is present in an array, returns boolean value
const flag =mainIndexArray.includes("amazon");
console.log(flag);

//forEach method - to execute a function on each element of an array
let count =0;
mainIndexArray.forEach((ele) => {
    if(ele == "nile") {
        count++;
    }
})
console.log(count);

console.log("*******************************************************************************************************************************************************************");

//every method - to check if all elements of an array satisfy a condition
let heroArr = ["Batman", "Superman", "Spiderman"];
const heroFlag = heroArr.every((ele) => ele.includes("man"));
console.log(heroFlag);

//some method - to check if any element of an array satisfies a condition
let randomNumArr = [2,13,89,12,78,35,56];
const randomNumFlag = randomNumArr.some((ele) => ele % 2 == 0);
console.log(randomNumFlag);

//find method - to find the first element that satisfies a condition
let objStudentArr = [
                        {id:1 , name:"John", expertise:"Java"},
                        {id:2 , name:"Mike", expertise:"Python"},
                        {id:3 , name:"Steve", expertise:"C++"},
                        {id:4 , name:"Ram", expertise:"C"}
                    ];
const valueFound = objStudentArr.find((ele) => ele.expertise=="Java");
console.log(valueFound);


