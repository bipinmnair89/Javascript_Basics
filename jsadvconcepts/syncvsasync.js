/* <This file is to understand sync vs async concepts in Javascript>

Difference between synchronous and asynchronous programming in Javascript
    -> Javascript is a single threaded language and is synchronous by default.
    -> As JS is single threaded, all tasks run on the same thread and thus time consuming tasks can cause delays.
    -> To overcome this problem, we can use asynchronous programming.
    -> Async programming is implemented in JS using callbacks, promises and async/await.
    -> Some of async operations in JS are setTimeout, setInterval, fetch and I/O operations.
    -> Even if  we call setTimeout with timeout as 0, there would be a delay in execution as it goes into event loop and it has to wait until the call stack is empty.
    -> JS handles async operations with the help of event loop.


How nodejs Event loop works
    -> Event loop allows multiple tasks to run on a single thread.
    -> Reference to understand event loop - https://dev.to/nodedoctors/an-animated-guide-to-nodejs-event-loop-3g62
    -> Event loop consists of  - Call Stack (managed by V8 JS Engine), LIBUV (C library), Event Queue and Event Loop.
    -> All code initially would reside in Heap memory.
    -> All JS functions are added to the Call Stack and executed in LIFO order.
    -> When a Async function is called, it comes to call stack and is then moved to LIBUV to be processed.
    -> Meanwhile the following JS function in code will be moved to call stack.
    -> Once LIBUV has processed the async function(which has a callback), the LIBUV moves the callback to the event/callback queue.
    -> Event/callback queue executed in FIFO order.
    -> Event loop continuously scans the call stack and event/callback queue.
    -> The event loop checks if the call stack is empty, then it will move the first item in the event/callback queue to the call stack.
    -> If the callback function has within it another async callback , it would move to LIBUV to be processed and the same steps as above follows.

Event Loop advanced
    -> Reference - https://www.youtube.com/watch?v=KKM_4-uQpow&t=5s
    -> The event/callback queue has multiple queues within, each for specific tasks.
    -> The different queue's are  -  Timers
                                     Pending callbacks
                                     Idle/Prepare
                                     Poll
                                     Check
                                     Close Callbacks
    -> There are 2 more separate queue's - process.nextTick()
                                         - promises
































*/