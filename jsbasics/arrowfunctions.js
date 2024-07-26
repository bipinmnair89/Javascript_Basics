// Demonstrate different use cases of arrow functions


//Without parameters
const emptyFunction = () => console.log("This is an empty arrow function");
emptyFunction();

//With parameters
const parameterFunction = (a,b) => console.log(a+b);
parameterFunction(2,3);

//With multiple expressions
const multiExpressionFunction = (a,b) => {
    console.log(a*b);
    console.log(a/b);
}
multiExpressionFunction(6,2);

//With IIFE
(() => console.log("This is an IIFE"))();

//with higher order functions ex: map
let arrayNumbers = [1, 2, 3, 4, 5];
let multipliedNumbers = arrayNumbers.map((number) => number*2);
console.log(multipliedNumbers);

/* In the below example we have used default parameters
   Instead of double quotes for printing the values we have used the backticks - `
   This is called template literals and couple of usages - string interpolation, multiline strings, embedded expressions
*/
let companyDetails = (company = "Google", location = "USA") => {
    console.log(`Company name is ${company} and location is ${location}`);
};
companyDetails();
companyDetails("Microsoft", "India");

/*In the below example we have used - default parameter
                                    - rest parameters
                                    - arrow functions
*/

let browserConfiguration = (browser='Safari', ...browserSpecs) => {
                           console.log(`Browser selected is - ${browser}`);
                           console.log(`Browser specs are - ${browserSpecs}`);
}
browserConfiguration();
browserConfiguration('Chrome','Company - Google', 'Engine - Chromium', 'version - 115.0.0.0');
browserConfiguration('Edge','Company - Microsoft', 'Engine - Chromium', 'version - 2024.0.0.0');