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

