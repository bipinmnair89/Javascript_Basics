// This file has a basic example of how promise chaining can be used to mitigate the callback hell

const asyncFunctionA = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {{
            console.log("asyncFunctionA");
            resolve();
        }}, 1000);
    })
};

const asyncFunctionB = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {{
            console.log("asyncFunctionB");
            resolve();
        }}, 1000);
    })
};

const asyncFunctionC= () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {{
            console.log("asyncFunctionC");
            resolve();
        }}, 1000);
    })
};

asyncFunctionA()
    .then(() => asyncFunctionB())
    .then(() => asyncFunctionC())
    .then(() => console.log("All async functions completed"))
    .catch((error) => console.log("An error occurred "+error));