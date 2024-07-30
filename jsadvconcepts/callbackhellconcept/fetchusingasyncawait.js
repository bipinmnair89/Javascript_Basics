//This file contains the Javascript implementation of fetching data from an API and display it using async/await
//For this scenario we are creating 2 function fetchData and displayData


const fetchData = async(userId) => {
        try{
            const response = await fetch(`https://jsonplac1eholder.typicode.com/users/${userId}`);
            if(!response.ok) {
                throw new Error(error);
            }
           const data = await response.json();
           return data;
        }catch(error){
            throw error;
 }
}

//The below function is also async in nature as it invokes the async function fetchData
const displayData = async () => {
    try{
        const dataOutput = await fetchData(1);
        console.log(`Data fetched successfully`);
        console.log(dataOutput);
    }catch(error){
        console.error(`There has been a problem with your fetch operation: ${error.message}`);
    }
}

displayData();

console.log(`Initiating data fetching process .......................`);