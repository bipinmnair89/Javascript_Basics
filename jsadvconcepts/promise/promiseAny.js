//Scenario 1 - One promise is rejected at the beginning and still waits till first promise is resolved.
const promiseA =() => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`PromiseA`);
        }, 3000);
    });
}

const promiseB = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error(`Promise B is rejected`));
        }, 1000);
    });
}

const promiseC = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Promise C`);
        }, 2000);   
    });
}

Promise.any([promiseA(), promiseB(), promiseC()])
       .then(result => { console.log(result); })
       .catch(error => { console.log(error); });


//Scenario 2 - When all promises are rejected
const promiseX = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`PromiseX is rejected`);
        }, 3000);
    });
}

const promiseY = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`Promise Y is rejected`);
        }, 1000);   
});
}

const promiseZ = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(`Promise Z is rejected`);
        }, 5000);
    });
}

Promise.any([promiseX(), promiseY(), promiseZ()])
       .then(result => { console.log(result); })
       .catch(error => { console.log(error); });
