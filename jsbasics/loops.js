/*for loop in Javascript*/

function basicForloopinJS() {

    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}
// basicForloopinJS();

//forof loop in Javascript is similar to foreach loop in Java
function forOfLoopinJS() {
    const arr = [1, 2, 3, 4, 5];
    for(let value of arr) {
        console.log(value);
    }
}
// forOfLoopinJS();

//basic for loop with array
function basicForLoopWithArray() {
    const arr = [1, 2, 3, 4, 5];
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// basicForLoopWithArray();


//forin loop with an object in Javascript
function forInLoopwithObject() {
    const obj = {
                    name: "John",
                    age: 30
                };
    for(let key in obj) {
        console.log(key, obj[key]);
    }
}
forInLoopwithObject();

//while loop in Javascript which prints even numbers
function whileLoopTest() {
    let i = 2;
    while(i <= 10) {
        console.log(i);
        i += 2;
    }
}
// whileLoopTest();

//do-while loop in Javascript which prints odd numbers
function doWhileLoopTest() {
    let i = 1;
    do {
        console.log(i);
        i += 2;
    } while(i < 10);
}
// doWhileLoopTest();
