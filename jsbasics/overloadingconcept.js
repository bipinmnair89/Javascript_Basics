/* This file is to assess method overloading concept feasibility in Javascript

    -> Method Overloading by default is not possible in Javascript
    -> Javascript is a dynamically typed language and hence function parameters are not part of its signature
    -> We can simulate method overloading by using arguments object, rest parameters, typeof operator
*/

/*
   Example of why method overloading is not possible in Javascript
   Even if we call with or without parameters, only the latest method will get executed
*/

function employeeDetail() {
    console.log(`Employee details are not available`);
}

function employeeDetail(name) {
    console.log(`Employee name is ${name}`);
}

function employeeDetail(name, company) {
    console.log(`Employee name is ${name} and company is ${company}`);
}

employeeDetail('John');


/* Example of method overloading simulation using Rest Parameters */

function employeeDetails(...employeeData) {
    console.log(employeeData);
}

employeeDetails('John', 'Microsoft', 'Manager');
employeeDetails('Jane', 'Google');
employeeDetails('Steve', 'Facebook', 'Developer', 'Designer');

/* Example of method overloading simulation using typeof operator */

function employeeDetailList(name, company, designation) {
    if (typeof name === 'string' && typeof company === 'string' && typeof designation === 'string') {
        console.log(`Employee name is ${name} and company is ${company} and designation is ${designation}`);
    }
    else if(typeof name === 'string' && typeof company === 'string') {
        console.log(`Employee name is ${name} and company is ${company}`);
    }
    else if(typeof name === 'string') {
        console.log(`Employee name is ${name}`);
    }
    else {
        console.log(`Employee details are not available`);
    }
}
employeeDetailList();
employeeDetailList('John');
employeeDetailList('John', 'Microsoft');
employeeDetailList('John', 'Microsoft', 'Manager');