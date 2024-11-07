/* This file demonstrates how to use inheritance in Javascript
    -> extends keyword is used to implement inheritance
    -> super keyword is used to call the parent class constructor, methods, variables.
    -> child class reference variable can be used to call the parent class methods
    -> multiple inheritance is not possible in Javascript
    -> multilevel inheritance is possible in Javascript
*/

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} vehicle is starting`);
    }
}


class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    unlockCar() {
        console.log(`Unlocking the car`);
    }
    drive() {
        console.log(`${this.brand} ${this.model} is driving`);
    }
}


class Tesla extends Car {

    constructor(brand, model, fuelType) {
        super(brand, model);
        this.fuelType = fuelType;
    }
    
    charging() {
        super.unlockCar();
        console.log(`${this.brand} ${this.model} is an ${this.fuelType} vehicle and is charging`);
    }
}

class BMW extends Car {

    constructor(brand, model, fuelType) {
        super(brand, model);
        this.fuelType = fuelType;
    }

    refueling() {
        super.unlockCar();
        console.log(`${this.brand} ${this.model} is a ${this.fuelType} vehicle and is refilling`);
    }
}

const teslaX = new Tesla('Tesla', 'X', 'electric');
teslaX.charging();
// teslaX.refueling(); //will return runtime error
teslaX.drive();
teslaX.start();
const bmwX = new BMW('BMW', 'X', 'petrol');
bmwX.refueling();
bmwX.drive();
bmwX.start();