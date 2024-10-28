//This is a basic promise implementation which checks a randomly generated function is odd(returns error) or even(returns the number).


const myPromise = new Promise((resolve,reject) => {
    //async code
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100000000) + 1; //generating a positive number without decimal
        if(randomNumber%2==0) {
            resolve(randomNumber);
        } else {
            reject(new Error("Please try again..."));
        }
    },2000);
})

//while using then catch finally, we should add semicolon only after finally.
myPromise
    .then(result => {console.log(`Number is even - ${result}`)})
    .catch(error => {console.log(`Number is odd -  ${error}`)})
    .finally(() => {console.log("Process completed")});

