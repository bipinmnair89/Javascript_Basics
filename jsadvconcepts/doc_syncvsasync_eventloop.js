/* <This file is to understand sync vs async concepts in Javascript>

Difference between synchronous and asynchronous programming in Javascript
    -> Javascript is a single threaded language and is synchronous by default.
    -> As JS is single threaded, all tasks run on the same thread and thus time consuming tasks can cause delays.
    -> To overcome this problem, we can use asynchronous programming.
    -> Async programming is implemented in JS using callbacks, promises and async/await.
    -> Some of async operations in JS are setTimeout, setInterval, fetch and I/O operations.
    -> Even if  we call setTimeout with timeout as 0, there would be a delay in execution as it goes into event loop and it has to wait until the call stack is empty.
    -> JS handles async operations with the help of event loop.
    -> Event loop in NodeJS runtime and Browser Javascript runtime are different.

Event Loop Basics
    -> Main components - V8 engine(Heap and Call Stack), C library(libuv)/Web API, Event/Callback Queue and Event Loop.
    -> The Heap consists of initialized JS code. During runtime the code is added to the Call Stack in LIFO order.
    -> The async operations added to the Call Stack are moved to LIBuv(Node) / WebAPI (JS) to be processed.
    -> Once the async operation completes, it gets added to the event/callback queue in FIFO order.
    -> The event loop scans the call stack and event/callback queue, once the call stack is empty, the callbacks in the queue are added to the call stack.
    -> If the callback function that moved from queue to stack has within it another callback then again it goes through the same cycle.

Event Loop Advanced
    -> The browserJS event/callback queue has 2 queues - Macro task queue(setTimeout, setInterval, fetch etc) and Micro task queue(Promise.then, async await, Object.observe etc).
    -> Once call stack is empty, the event loop checks if anything is there in micro task queue, if yes then it flushes all of it one by one to call stack.
    -> Once micro task queue is empty and call stack is empty, then event loop would move the first item from macro task queue to call stack.
    -> Once macro task is completed in call stack, event loop again checks if anything is there in micro task queue before moving to next macro task.
    -> The Node.js event/callback queue also has 2 queues - Macro and Micro, but here there are differences.
    -> Node.js micro tasks queue processes(process.nextTick, Promises.then, Promise.catch, Promise.finally, async function bodies following await).
    -> The process.nextTick() task is prioritized by event loop over Promise task.
    -> Node.js macro tasks queue has further sub queues in a specific order Timers, Pending, Idle/Prepare, Poll, Check, Close.
    -> Timers (setTimeout, setInterval), Poll (I/O, network), Check(setImmediate).
    -> Pending, Idle/Prepare and Close are used inbuilt for Node.js.
    -> If Check queue is not empty, event loop will end the Poll queue and process Check queue.
    -> If Check queue is empty, event loop will move to Timer queue and process the same.
    -> If Timer queue is also empty, event loop will wait for callbacks to be added to the Poll queue.
    -> Scenario 1 - If fs.readFile method has inside it setTimeout, setImmediate and Promise, then order would be Promise, setImmediate and then setTimeout.
    -> This is because fs.readFile brings the event loop to Poll queue and from there first microtask will get executed then setImmediate and then setTimeout as per the order.
    -> Scenario 2 - If the order is Promise1(string), Promise2(process.nextTick), Promise3(process.nextTick), Promise(string), process.nextTick.
    -> For scenario 2, the order of execution would be process.nextTick, Promise1, Promise4, Promise 2, Promise 3.
    -> Usually when there is a process.nextTick and Promise, then priority is for process. But when there are promises executing, then process.nextTick waits till all promises are completed.
References
    -> https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62
    -> https://www.youtube.com/watch?v=KKM_4-uQpow
    -> https://www.builder.io/blog/visual-guide-to-nodejs-event-loop
    -> https://wearecommunity.io/communities/aep-js-community/articles/2893
    -> https://www.lydiahallie.com/blog/event-loop

*/