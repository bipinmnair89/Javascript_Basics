
function promiseA() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`PromiseA`);
        }, 2000);
    });
}

function promiseB() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(`Promise B`);
        }, 3000);
    });
}

function promiseC() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject(new Error(`Error with Promise C`));
        }, 1000);        
    });
}

Promise.race([promiseA(), promiseB(), promiseC()])
    .then(result => {console.log(result);})
    .catch(error => {console.log(error);});