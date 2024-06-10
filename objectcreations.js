/* This file is to understand different object creation methods in Javascript

 -> using Object Literals
 -> using Constructor Function
 -> using ES6 class syntax
 -> using Object.create()
 -> using Object.assign()
 -> using Factory functions
*/

/* Object Literals
  -> In an object we can add Strings, Numbers, Booleans, Arrays, Objects, Functions, null and undefined.
*/

const objectUsingObjectLiterals = {
    name : 'John',
    company : 'Google',
    designation : 'Frontend Developer',
    yearsOfExperience : 2,
    previousCompany : 'Microsoft',
    salary : undefined,
    skills : ['HTML', 'CSS', 'Javascript'],
    onsite : true,
    addressDetails : function() {
        return 'Address Details to be updated';  //if there is no return statement then the function would print undefined.
     },
    reportingManagerDetails : {
        name : 'Jane',
        age : 30,
        address : 'USA',
        salary : 50000,
        designation : 'Manager'
    }
}
console.log(objectUsingObjectLiterals);
console.log(objectUsingObjectLiterals.addressDetails());

console.log('*****************************************************************************************************************************************************************');


/* Constructor Function
  -> It is a function that can be used to create multiple objects
  -> this keyword refers to the newly created object
  -> toString() method is used to print the value inside the function addressDetails by overriding and using a custom implementation
*/

function EmployeeDetails(name, company, designation) {
    this.name = name;
    this.company = company;
    this.designation = designation;
    this.addressDetails = function() {
        return `Address Details of ${this.name} to be updated`;
    }
    this.toString = function() {
        return `Employee Details\n Name: ${this.name}\n Company: ${this.company}\n Designation: ${this.designation}\n Address Details: ${this.addressDetails()}`;
    }
}
const employeeA = new EmployeeDetails('John', 'Google', 'Frontend Developer');
console.log(employeeA.toString());
const employeeB = new EmployeeDetails('Jane', 'Microsoft', 'Manager');
console.log(employeeB.toString());

console.log('*****************************************************************************************************************************************************************');


/* ES6 class syntax
  -> It is a class that can be used to create multiple objects
  -> we need to use constructor keyword to define a constructor
*/

class EmployeeDetailsLibrary {

        constructor(name, company, designation) {
            this.name = name;
            this.company = company;
            this.designation = designation;
            this.addressDetails = function() {
                return `Address Details of ${this.name} to be updated`;
            }
            this.toString = function() {
                return `Employee Details\n Name: ${this.name}\n Company: ${this.company}\n Designation: ${this.designation}\n Address Details: ${this.addressDetails()}`;
            }
        }
}
const personA = new EmployeeDetailsLibrary('Micheal', 'Netflix', 'Backend Developer');
console.log(personA.toString());    
const personB = new EmployeeDetailsLibrary('Sam', 'Amazon', 'Senior Developer');
console.log(personB.toString());    

console.log('*****************************************************************************************************************************************************************');





