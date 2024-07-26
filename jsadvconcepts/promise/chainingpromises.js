/* This is a  promise chaining implementation

    In the below code there is a function to generate a random number.
    The promise code has a setTimeout async method to implement promise handling of async methods.
    In the then() handler of the first promise, we invoke the chaining promise, which will follow another then() handler.
*/
const generatePositiveNumber = () => {
    return Math.floor(Math.random() * 100000000) + 1;
}

const checkOddOrEven = (number, delay) => {
    console.log(`***Promise iteration initiated***`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(number%2==0) {
                resolve(number);
            }else {
                reject(new Error(`Please try again...`));
            }
        }, delay);
    });
}

checkOddOrEven(generatePositiveNumber(),3000)
        .then(result => {
            console.log(`Iteration 1 : The number ${result} is an even number`);
            return checkOddOrEven(generatePositiveNumber(), 3000); //calling promise
        })
        .then(result => {
            console.log(`Iteration 2 : The number ${result} is an even number`);
        })
        .catch(error => {
            console.log(`Number is odd in this iteration : ${error}`);
        })
        .finally(() => console.log(`Promise iteration completed`));


