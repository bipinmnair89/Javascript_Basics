// map, filter and reduce methods in Javascript

/*
Map method (transformation) is used when we have to transform each element of an array to another value
It can be also used to fetch a specific element from an array of objects as shown in method getAgesFromEmployees
It returns another array containing the transformed elements with same length as the original array
*/

function getMapWithDoubledNumbers(numbers) {
    let doubledNumbers = numbers.map((number) => number*2);
    console.log(doubledNumbers);
}
let numbers = [1, 2, 3, 4, 5];
getMapWithDoubledNumbers(numbers);

function getAgesFromEmployees(employees) {
    let getAgeArr = employees.map((value) => value.age);
    console.log(getAgeArr);
}
let employees = [
                        {id:1 , name:"John", age:25},
                        {id:2 , name:"Mike", age:30},
                        {id:3 , name:"Steve", age:35},
                        {id:4 , name:"Ram", age:40},
                        {id:5 , name:"Sita", age:45}
];
getAgesFromEmployees(employees);


/*
Filter method (selection) is used when we have to apply a condition to each element of an array and select the elements that satisfy the condition
It returns another array containing the filtered elements
*/

function filterEvenNumbers(numbersArray) {
    let evenNumbers = numbersArray.filter((number) => number%2==0);
    console.log(evenNumbers);
}

let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterEvenNumbers(numbersArray);


function filterEmployeesByAge(employeeDetails) {
    let empAgeOver30 = employeeDetails.filter((value) => {return value.age>30 && value.gender==="female";});
    console.log(empAgeOver30);
}

let employeeDetails = [
                        {id:1 , name:"John", gender:"male", age:25},
                        {id:2 , name:"Sherin", gender:"female", age:30},
                        {id:3 , name:"Steve", gender:"male", age:35},
                        {id:4 , name:"Maya", gender:"female", age:40},
                        {id:5 , name:"Sita", gender:"female", age:45}             
                    ];

filterEmployeesByAge(employeeDetails);


/*
Reduce method (aggregation) is used when we have to apply a function to each element of an array and reduce it to a single value
It returns a single value
*/

function getSumOfNumbers(numbers) {
    let sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator+currentValue, 0);
    console.log(sumOfNumbers);
}
let numbersGroup = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getSumOfNumbers(numbersGroup);


function getAvgAgeOfEmployees(employeeDetailsData) {
    let avgAge = employeeDetails.reduce((accumulator, currentValue) => accumulator+currentValue.age, 0);
    console.log(avgAge/employeeDetailsData.length);
}

let employeeDetailsData = [
                        {id:1 , name:"John", gender:"male", age:25},
                        {id:2 , name:"Sherin", gender:"female", age:30},
                        {id:3 , name:"Steve", gender:"male", age:35},
                        {id:4 , name:"Maya", gender:"female", age:40},
                        {id:5 , name:"Sita", gender:"female", age:45}             
                    ];
getAvgAgeOfEmployees(employeeDetailsData);




