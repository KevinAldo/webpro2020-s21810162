/*
    Var, Let, Const
*/

// let nama = "Kevin"
// let nama = "Aldo"

// console.log(nama);

//scope dalam javascript
//1. Function scope (var)
//2. Block scope

// for (var i=0;i<10;i++)
// {
//     console.log(i);
// }

// function tes(){
//     for (var i=0; i<9; i++)
//     {
//         console.log(i);
//     }
// }
// tes();
// console.log(i);

//console.log(i);

// {
// let i;
// for (i = 0; i<9; i++)
// {
//     console.log(i);
// }
// }
// console.log(i);

//template Literal

const person = {
    firstName: "Kevin",
    lastName: "Aldo",
    age: 20,
};

console.log("Hello nama saya " + person.firstName + " " + person.lastName + "." + " umur saya adalah " + person.age)

console.log(`Hello nama saya ${person.firstName} ${person.lastName}. Umur saya adalah ${person.age}`);