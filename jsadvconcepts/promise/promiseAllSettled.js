

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
            reject(new Error(`Error with Promise C`));
        }, 5000);        //all promises would be moved to the event loop after 5 seconds (which is the maximum duration out of the three promises)
    });
}

Promise.allSettled([promiseA(), promiseB(), promiseC()])
    .then(result => {
        result.forEach(res => {
            if(res.status === 'fulfilled') {
                console.log(res.value);
            } else {
                console.log(res.reason);
            }
        })
    });