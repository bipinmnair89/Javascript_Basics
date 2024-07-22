/*
Callback functions are functions which are passed as arguments to another function
Callback functions are also known as higher order functions
Callback functions are mainly used in asynchronous programming and event handling
Callback functions are of 2 types - synchronous and asynchronous
*/


/*Synchronous callback function with one parameter
  These are executed immediately within the function they are passed to. They do not delay the execution of the main function.
  common function - displayEmployeeDetails
  callback function - nameOfEmployee
  invoking - displayEmployeeDetails(nameOfEmployee)
*/

function displayEmployeeDetailsSync(callback) {
    callback();
}
function nameOfEmployeeSync() {
    console.log(`Name of the employee is - John`);
}
displayEmployeeDetailsSync(nameOfEmployeeSync);

//Synchronous callback arrow function with two parameters

const displayEmployeeDataSync = (name, callback) => {
    console.log(`Name of the employee is - ${name}`);
    callback();
}
const deptOfEmployeeSync = () => console.log(`Department of the employee is - IT`);

displayEmployeeDataSync('George', deptOfEmployeeSync);

