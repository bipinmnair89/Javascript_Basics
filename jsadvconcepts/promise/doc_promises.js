/* <This file is to understand Promises concepts in Javascript>

    -> Promises are a cleaner approach to traditional callback functions.
    -> Promises are used to handle asynchronous operations.
    -> When a promise is declared, in memory a promise object is created with a Promise state, Promise Result, Promise Fulfillment Handler and Promise Rejection Handler.
    -> Promise state -> Pending, Fulfilled(resolved), Rejected.
    -> Promise result -> undefined(initially), value, error.
    -> Promise can be created using Promise constructor. const myPromise = new Promise((resolve, reject) =>{//async code});
    -> Promise handlers -> then, catch, finally. myPromise.then(result => {}), myPromise.catch(error => {}), myPromise.finally(() => {});
    -> Promise chaining - where each then() will return a separate promise. 
    -> Promises are used to make asynchronous operations appear to be synchronous.
    -> For example, In console we print A,C,B(as B is async it appears after A,C which are sync).
    -> Here we can make B a promise and in then() handler we can print C. Which would print in the order A,B,C. Thus making it look like synchronous. 
    -> Promise.all() -> used to execute all promises in parallel. Syntax - Promise.all([promise1, promise2, promise3]).then(result => {}).catch(error => {});
    -> Promise.all will enter the then() handle only when all promises are resolved. Else it would go to catch().
    -> Promise.all will wait either for all promises to get resolved or it will wait till one promise gets rejected.
    -> Promise.allSettled() -> used to know which all promises got resolved or rejected. To gather all information.
    -> To filter out the information about promises, we can use forEach and condition 'if' on the basis of state and specify the value and reason.
    -> Promise.race() -> used to get the first promise to resolve or reject when multiple promises are running in parallel.
    -> Promise.any() -> use to get first resolved promise. Even if there are promises that are rejected it waits for the first promise to resolve.
    -> If all the promises are  rejected, then Promise.any() will move into catch block.


    Promises in Event loop
    -> When a promise is created with promise constructor a promise object gets created.
    -> The promise object has couple of properties - Promise state, Promise result, PromiseFulfillReactions, PromiseRejectReactions and PromiseIsHandled.
    -> Initially when the object is created, then the Promise state - Pending and Promise result - undefined.
    -> When a promise is resolved, then the Promise state - fulfilled and Promise result - value which is passed while resolving.
    -> When a promise is rejected, then the Promise state - Rejected and Promise result - error which is passed while rejecting.
    -> After a promise is resolved, then()  is passed to the PromiseFulfillReactions with the Promise result.
    -> After a promise is rejected, catch() is passed to the PromiseRejectReactions with the Promise result.
    -> PromiseIsHandled is false when promise state is pending and PromiseIsHandled is true when promise state is fulfilled/rejected.
    -> reference -  https://lydiahallie.framer.website/blog/promise-execution
                 -  https://dev.to/makoto0825/how-to-use-promise-chaining-in-javascript-391c


    Async/Await in Promises
    -> async is used along with the function
    -> await is used in the async function for the steps that needs to be completed one by one.
    -> async/await can be used to run the promise fulfillment handlers.
    -> async/await use try catch block.
    -> reference - https://dev.to/makoto0825/how-to-use-asyncawait-in-promise-38hc             
*/