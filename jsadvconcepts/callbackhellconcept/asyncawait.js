// This file has a basic example of how async await can be used to mitigate the callback hell

const asyncFunctionA = () => {{
    return new Promise((resolve, reject) => {
        setTimeout(() => {{
            console.log("asyncFunctionA");
            resolve();
        }}, 1000);
    })
}
};

const asyncFunctionB = () => {{
    return new Promise((resolve, reject) => {
        setTimeout(() => {{
            console.log("asyncFunctionB");
            resolve();
        }}, 1000);
    })
}
};

const asyncFunctionC= () => {{
    return new Promise((resolve, reject) => {
        setTimeout(() => {{
            console.log("asyncFunctionC");
            resolve();
        }}, 1000);
    })
}
};

async function asyncFunctionMain() {
    try{
        await asyncFunctionA();
        await asyncFunctionB();
        await asyncFunctionC();
        console.log("All async functions completed");
    } catch(error) {
        console.log("An error occurred "+error);
    }
}

asyncFunctionMain();