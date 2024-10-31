/*In global scope this refers to global object - (window in browser and global in node.js)
  this takes global scope if it is outside a function.
  Even if inside a condition stmt like 'if' this keyword would refer to global object
*/

console.log(this);


/*  'this' inside a function
    fDeclaration or fExpression - this is dynamically scoped. 
    Arrow functions - this is lexically scoped, means the value of this is determined by surrounding scope and it would take the global scope
    In the below example  - giving 'this' refers to the object itself - personA
                          - giving 'name' doesn't fetch any value as within the function name is not defined
                          - giving 'this.name' is similar to giving 'person.name' fetches the value as 'this' refers to the current object.
                          - inside arrow function 'this' takes global scope
*/

const personA = {
      name : "Spongebob",
      favFood : "Hamburger",
      sayHello : function () { console.log(this)},
      sayNameFake : function () { console.log(`Name is  - ${name}`)},
      sayNameReal : function () { console.log(`Name is  - ${this.name}`)},
      sayFullDetails : function() { console.log(`Name is - ${this.name} and favFood is - ${this.favFood}`)},
      sayFoodDetails : () =>  { console.log(`Fav food is  - ${this.favFood}`)}
}

personA.sayHello();
// personA.sayNameFake();
personA.sayNameReal();
personA.sayFullDetails();
personA.sayFoodDetails();

/*  'this' inside a constructor
    In JS, constructors can be created either with constructor function or with ES6 Class
    'this' keyword helps to bind the properties to specific objects.
    In the below example, if we don't define the variable as this, then it won't be accessible once the constructor is called as it would be considered local to constructor.
*/

class Car {
  constructor(carName, carCategory, carFuel) {
    this.carName = carName;
    this.carCategory = carCategory;
    // this.carFuel = carFuel; 
  }
    displayCarDetails() { 
      console.log(`The car name is  - ${this.carName}, the car category is - ${this.carCategory}`);
      console.log(`The car fuel is  - ${this.carFuel}`)};
}

const tesla = new Car('Model X', 'SUV', 'Electric');
console.log(tesla.carFuel);  //cannot access carFuel outside if 'this' keyword is not used inside the constructor.
tesla.displayCarDetails();  //cannot access carFuel outside if 'this' keyword is not used inside the constructor.


