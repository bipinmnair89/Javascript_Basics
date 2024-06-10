/* This file is to understand different object creation methods in Javascript

 -> using Object Literals
 -> using Constructor Function
 -> using ES6 class syntax
 -> using Object.create()
 -> using Object.assign()
 -> using Factory functions
*/

console.log('************************************************OBJECT LITERALS**************************************************************************');


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

console.log('************************************************CONSTRUCTOR FUNCTION**************************************************************************');


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

console.log('************************************************ES6 CLASS SYNTAX**************************************************************************');


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

console.log('************************************************OBJECT CREATE METHOD**************************************************************************');

/* Object.create()
  -> It is used to create objects from another object
  -> The Object.create() method accepts 2 arguments
  -> The first argument is an object that will be used as the prototype of the newly created object
  -> The second argument is the newly created object which is optional
  -> In the below code we can see that we are passing writable configurable and enumerable as true while creating second object with same prototype
  -> This is because by default in ES6 we have writable configurable and enumerable as false for better security
  -> writable: true means we can change the value of the property
  -> enumerable: true means we can use the value in loops
  -> configurable: true means we can delete the property
  -> useful in implementing inheritance without use of constructor and creating object with custom properties

*/

let personPrototype = { city : 'London',
                        calculateAge : function() {
                            let currentYear = new Date().getFullYear();
                            return currentYear - this.dob;
                        }
}

const employeeRollNoA = Object.create(personPrototype);
employeeRollNoA.name = 'John';
employeeRollNoA.designation = 'Frontend Developer';
employeeRollNoA.dob = 1995;
console.log(employeeRollNoA);
console.log(employeeRollNoA.calculateAge());

//passing the second argument
const employeeRollNoB = Object.create(personPrototype, { name : { value : 'Jane', writable : true, enumerable : true, configurable : true },
                                                        designation : { value : 'Manager', writable : true, enumerable : true, configurable : true },
                                                        dob : { value : 1990, writable : true, enumerable : true, configurable : true } });
console.log(employeeRollNoB);
console.log(employeeRollNoB.calculateAge());

console.log('************************************************OBJECT ASSIGN METHOD**************************************************************************');

/* Object.assign()
  -> It is used to merge properties of two or more objects
  -> It will return the merged object
  -> If we don't give {} as argument then it will modify the value of the first object
*/

const employeePersonA = {
    name : 'John',
    company : 'Google',
    designation : 'Frontend Developer',
    yearsOfExperience : 2,
    previousCompany : 'Microsoft',
    salary : undefined,
    skills : ['HTML', 'CSS', 'Javascript'],
    onsite : true
};

const employeePersonB = Object.assign({}, employeePersonA, {
    name : 'Micheal',
    designation : 'Backend Developer',
    yearsOfExperience : 3,
    previousCompany : 'Amazon',
    skills : ['Java', 'SQL', 'Node']
});
console.log(employeePersonA);
console.log(employeePersonB);

console.log('************************************************FACTORY FUNCTIONS**************************************************************************');

/* Factory functions
  -> It is a function that can return an object
  -> It is a function that can be used to create multiple objects
  -> No need to use keywords like new, this etc to invoke the function
  -> We can invoke the function like any other function and it returns an object
  -> When Object.create() gives importance to prototypal inheritance, factory functions gives importance to Encapsulation
*/

function customFactoryFunction(name, company, designation) {
    return {
        name : name,
        company : company,
        designation : designation,
        employeeData : function() {
            return `Employee details \n Name: ${this.name}\n Company: ${this.company}\n Designation: ${this.designation}`;
        }
    }
}

const employeePersonC = customFactoryFunction('Jane', 'Microsoft', 'Manager');
const employeePersonD = customFactoryFunction('John', 'Google', 'Developer');
console.log(employeePersonC.employeeData());
console.log(employeePersonD.employeeData());










