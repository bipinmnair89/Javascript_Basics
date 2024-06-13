/* This file is to learn static concepts in Javascript

    -> Static methods and variables can be accessed with the class name
    -> Static methods and variables are part of the class itself
    -> The best candidates for static methods and variables are the ones whose value is constant for each object/instance of a class
    -> The Class variables cannot have type as let, var or const
*/

class Person {

    static companyName = 'Google';
    static companyRegion = 'US';
    constructor(name, expertise, dateOfBirth) {
        this.name = name;   
        this.expertise = expertise;
        this.dateOfBirth = dateOfBirth;
    }

    static companyDetails() {
        console.log(`Organization Details\nCompany name - ${Person.companyName} and company location - ${Person.companyRegion}`);
    }

    employeeDetails() {
        console.log(`Employee Name - ${this.name}\nEmployee Expertise - ${this.expertise}\nEmployee DOB - ${this.dateOfBirth}`);
    }
}

const person1 = new Person('John', 'Java', 1995);
person1.employeeDetails();
console.log(Person.companyName);
Person.companyDetails();
