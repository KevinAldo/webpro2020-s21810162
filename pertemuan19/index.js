// Javascript Class & OOP

// Class & Constructor
/*
const Person = {
    firstName: "Kevin",
    lastName: "Aldo",
    displayFullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
};
Person.displayFullName()
*/

class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    displayFullName(){
        console.log(`Nama : ${this.firstName} ${this.lastName}`)
    }
}

/*
const person1 = new Person('Bob', 'Jordan');
person1.displayFullName();
const person2 = new Person("John", "Doe");
person2.displayFullName();
*/

// Inheritance
class Student extends Person {
    constructor (firstName, lastName, NIM, age){
        super(firstName, lastName);
        this.NIM = NIM; 
        this.age = age
    }

//Static member
    static sayHello() {
        console.log(`Hello World`);
    }
    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }

//Setter dari Getter
    set studentScore(score) {
        this.score = score;
    }
    get studentScore(){
        return this.score;
    }
}

const john = new Student("John", "Doe", "112233");
john.displayFullName();
john.displayNIM();
Student.sayHello();

john.studentScore = 90;
console.log(`Nilai : ${john.studentScore}`);