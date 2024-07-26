//This is a  promise implementation inside a function which checks a number passed as argument is odd or even.

const checkOddOrEven = (number, delay) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if(number%2==0) {
                resolve(number);
            }
            else{
                reject(new Error("Please try again..."));
            }
        }, delay);
    });
}

checkOddOrEven(1,2000)
    .then(result => {console.log(`Number is even - ${result}`)})
    .catch(error => {console.log(`Number is odd -  ${error}`)})
    .finally(() => {console.log("Process completed")});
