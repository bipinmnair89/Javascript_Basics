/* This file is to understand class concept in Javascript
  -> A .js file can contain multiple classes
  -> Class is a blueprint for creating objects
  -> It is not necessary that .js file name and class name must be the same
  -> In a class, constructor can be defined with the keyword constructor and there need not be a name
  -> Inside a class, methods does not need to be created with 'function' keyword.
  -> Constructor overloading is not possible in Javascript
  -> Class can have constructors, getters, setters, static and non static methods.
*/


class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    printData() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nAddress: ${this.address}`);
    }
}

    const personA =new Person("John", 30, "New York");
    const personB =new Person("Jane", 25, "London");


