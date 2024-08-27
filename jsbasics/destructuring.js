// This file is used to understand the destructuring principle in Javascript

//Destructuring in Arrays
const cars = ["BMW", "Mercedes", "Audi"];
const [car1, car2, car3] = cars;
console.log(`Car 1 - ${car1} , Car 2 - ${car2} , Car 3 - ${car3}`);

const bikes = ["Yamaha", "Honda", "Kawasaki", "Suzuki", "BMW"];
const [bike1, bike2, bike3, ...bikeRest] = bikes;
console.log(`Bike 1 - ${bike1} , Bike 2 - ${bike2} , Bike 3 - ${bike3} , Bike rest - ${bikeRest}`);


//Destructuring in Objects

const organizationGoogle = { 
    nameOfOrg : "Google",
    regionOfOrg : "US"
};

const {nameOfOrg, regionOfOrg} = organizationGoogle;
console.log(`Company name is ${nameOfOrg} and region is ${regionOfOrg}`);

const organizationMicrosoft = { 
    name : "Microsoft",
    region : "Asia",
    country : "India",
    city : "Bangalore"
};

const {name, region, ...otherData} = organizationMicrosoft;
console.log(`Company name is ${name} and region is ${region} and other data is ${JSON.stringify(otherData)}`); 

//Destructuring in Functions using Array Destructuring
//Here instead of passing the array we are passing the array elements with the help of destructuring

function publishCarData([carA, carB, carC]) {
    console.log(`Publishing car data`);
    console.log(`Car a - ${carA} , Car b - ${carB} , Car c - ${carC}`);
}

publishCarData(cars);

//Destructuring in Functions using Object Destructuring
function publishOrgData({name, region, ...otherData}) {
    console.log(`Organization name is ${name} and Organization region is ${region} and other data is ${JSON.stringify(otherData)}`); 
}

publishOrgData(organizationMicrosoft);
