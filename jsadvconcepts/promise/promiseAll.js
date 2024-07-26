//Scenario 1 - where all promises are resolved.
const promiseA =() => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`PromiseA`);
        }, 2000);
    });
}

const promiseB = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Promise B`);
        }, 2000);
    });
}

const promiseC = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Promise C`);
        }, 7000);   //all promises would be moved to the event loop after 7 seconds
    });
}

Promise.all([promiseA(), promiseB(), promiseC()])
    .then(result => { console.log(result); }) //The result is an array of resolved promises
    .catch(error => { console.log(`All promises didn't get resolved`); });

console.log(`*****************************************************************************************************************`);
//the console log used to partition between the 2 scenarios gets executed first as its synchronous in nature.

//Scenario 2 - where one of the promises is rejected.

const promiseX = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`PromiseX`);
        }, 3000);
    });
}

const promiseY = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`Promise B`);
        }, 1000);   //all promises would be moved to the event loop after 1 second
    });
}

const promiseZ = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Promise Z`);
        }, 5000);
    });
}

Promise.all([promiseX(), promiseY(), promiseZ()])
       .then(result => { console.log(result); }) //The result is an array of resolved promises
       .catch(error => { console.log(`In Promise X,Y,Z All promises didn't get resolved`); });