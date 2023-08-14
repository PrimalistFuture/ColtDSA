"use strict";

// class
class Cat {
    constructor(catName, color) {
        this.catName = catName;
        this.color = color;
        this.timesFed = 0;
        this.toys = [];
    }
    // instance methods
    // functions that pertain to an instance of a class.
    fact() {
        return `My name is ${this.catName}, and I am a ${this.color} kitty.`
    }
    // don't name your instance method the same thing as a variable in the constructor...
    feed() {
        this.timesFed += 1;
        return `${this.catName} has never been fed ${this.timesFed} times.`
    }
    // toys could be accessed directly, but conventionally, people assume you are going to use their methods and not access the data directly.
    addToy(toy) {
        this.toys.push(toy);
        return this.toys;
    }
    // Class methods are functions that must be called on the class itself. Created with the static keyword.
    static AddCats(cats) {
        for (let cat of cats) {
            console.log(`Enrolling ${cat}`);
        }
    }
}

// creating instance from class using the new keyword
let pepper = new Cat('Pepper', 'black');
let purring = new Cat('Purring', 'black');

Cat.addCats([cat1, cat2]);