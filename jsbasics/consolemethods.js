//This file is to understand various console methods in Javascript

console.log('Hello World');

console.clear();

console.error('This is an error');

console.warn('This is a warning');

console.info('This is some information');

const userA = {
    name: 'John',
    age: 30,
    city: 'New York',
    country: 'USA'
};

const userB = {
    name: 'Jane',
    age: 25,
    city: 'London',
    country: 'UK'
};

console.table({userA,userB});


console.group('Group JS Info');
console.log('This is a group');
console.log('This is another group');
console.groupEnd('Group JS Info');


console.time('fetching data');
const arr = [1, 2, 3, 4, 5];
    for(let value of arr) {
        console.log(value);
    }
console.timeEnd('fetching data');


console.assert(10===20, 'Assertion is failing');

function addNumbers(num1, num2) {
    const num3 = num1 + num2;
    console.log(num3);
    console.trace();
}
addNumbers(10,20);