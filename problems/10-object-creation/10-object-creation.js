/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let objLiteral = {name: "hi", age: 1000};

function cons(name, age) {

    this.name = name;
    this.age = age;
}

let objConstructed = new cons("hi", "young");

class NameAge {

    constructor(name, age) {

	this.name = name;
	this.age = age;
    }
}

let objClass = new NameAge("hi", "old");

console.log(objLiteral);
console.log(objConstructed);
console.log(objClass);
