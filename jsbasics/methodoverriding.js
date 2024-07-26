/* This file is to understand method overriding in Javascript
    -> Method overriding is possible in Javascript
    -> Method overriding is part of Inheritance
    -> When parent and child class has same method with same name and same number of parameters then method overriding is possible
*/

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    driveMechanism() {
        console.log(`Majority of cars are now having automatic transmission`);
    }

    refueling(fuelType) {
        console.log(`${this.brand} ${this.model} is refueling with ${fuelType}`);
    }
}

class Tesla extends Car {
    constructor(brand, model, fuelType) {
        super(brand, model);
        this.fuelType = fuelType;
    }
    refueling(fuelType) {
        console.log(`${this.brand} ${this.model} is refueling with ${fuelType}`);
    }
}

const teslaX = new Tesla('Tesla', 'X', 'electric');
teslaX.refueling('electric');
teslaX.driveMechanism();

