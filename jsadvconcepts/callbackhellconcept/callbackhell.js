// This file has a basic example of how a callback hell or pyramid of doom appears in Javascript

const asyncFunctionA = (callback) => {
    setTimeout(() => {{
        console.log("asyncFunctionA");
        callback();
    }}, 1000);
};

const asyncFunctionB = (callback) => {
    setTimeout(() => {{
        console.log("asyncFunctionB");
        callback();
    }},2000);
};

const asyncFunctionC = (callback) => {
    setTimeout(() => {{
        console.log("asyncFunctionC");
        callback();
    }},2000);
};

//below we can view the pyramid of doom >
asyncFunctionA(() => {
    asyncFunctionB(() => {
        asyncFunctionC(() => {
            console.log("All async functions completed");
        });
    });
});