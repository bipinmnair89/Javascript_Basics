/*This file has the forEach implementation
    - The forEach loop works with Arrays
    - Purpose is to execute a function to each element in an Array
    - The forEach method takes a callback function as parameter
    - The callback function has 3 parameters - element, index(optional) and Array(optional)
    - forEach does not provide break or continue statements like conventional loops
*/

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index) => {
  console.log(`Number at index ${index}: ${num}`);
});

const colors = ['red', 'blue', 'green'];

colors.forEach((color, index, array) => {
  console.log(`The color value - ${color} is at index position - ${index} in the array which consists following data - [${array}]`);
});