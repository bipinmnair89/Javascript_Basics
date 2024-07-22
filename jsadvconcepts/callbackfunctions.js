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

/*Asynchronous callback function
  In the below example we are using setTimeout to simulate the asynchronous nature of the function
  syntax of setTimeout - setTimeout(function, time)
  anything outside the setTimeout function will be executed immediately
*/

const displayEmployeeDataAsync = (name, callback) => {
    setTimeout(() => {
        console.log(`Name of the employee is - ${name}`);
        callback();
    },3000);
    console.log("Printing instantly")
}
const deptOfEmployeeAsync = () => console.log(`Name printed after 3 seconds`);

// displayEmployeeDataAsync('Micheal', deptOfEmployeeAsync);

// Asynchronously fetches user data by ID and calls the callback function with the user object, or null if not found.
const fetchUserData = (userID, callback) => {
    setTimeout(() => {
        const users = {
            1 : { name : 'John', age : 30 , expertise : 'Java'},
            2 : { name : 'Mike', age : 25 , expertise : 'Python'},
            3 : { name : 'Steve', age : 35 , expertise : 'C++'},
            4 : { name : 'Ram', age : 40 , expertise : 'C'} 
        };
        const user = users[userID] || null;
        callback(user);
    }, 2000);
}

const checkEmployeeStatus = (user) => {
    if (user === null) {
        console.log('User not found');
    } else {
        console.log(`User found with name - ${user.name} and expertise - ${user.expertise}`);
    }
}
fetchUserData(1, checkEmployeeStatus);
fetchUserData(5, checkEmployeeStatus);