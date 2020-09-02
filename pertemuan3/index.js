console.log ("Hello world, from external file");
/*
    1. variable dan tipe data
*/

const firstName = "Kevin";
let age = 20;
age = 19;
const isMarried = false;
console.log(typeof firstname);
console.log(typeof age);
console.log(typeof isMarried);
console.log(age + " " + isMarried);

const info =
    "My name is " + firstName + ", I'm " + age + " years old." + isMarried;

console.log(typeof info);

function display(){
    for (let i=0; i<10; i++){
        console.log(i);
    }
}
display();

/*
    2. operator
*/

let bilangan = 10;
console.log(bilangan == "10");
console.log(bilangan === "10");