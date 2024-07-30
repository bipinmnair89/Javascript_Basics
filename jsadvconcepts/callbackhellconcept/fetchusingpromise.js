//This file contains the Javascript implementation of fetching data from an API and display it using promises
//For this scenario we are creating function fetchData and invoking the same

const fetchData = (userId) => {
        return fetch(`https://jsonplaceholder.2typicode.com/users/${userId}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(error);
            }
            return response.json();
        })
        .catch(error => {
            throw error;
        });
};


fetchData(1)
    .then(dataOutput => {
        console.log(`Data fetched successfully`);
        console.log(dataOutput);
    })
    .catch(error => {
        console.error(`There has been a problem with your fetch operation: ${error.message}`);
    });

    console.log(`Initiating data fetching process .......................`);