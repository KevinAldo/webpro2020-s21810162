/*
    Destrukturisasi Array
*/

//Memecah item atau properti pada array atau objek ke dalam variabel berbeda

// 1. Array
// Old way
// const colors =["merah", "kuning", "biru"];
// let satu = warna[0];
// let dua = warna[2];
// let tiga = warna[3];

// Menggunakan Destructuring
const colors =["merah", "kuning", "biru"];
let[satu, dua, tiga] = "warna";

// 2. Object
const person = {
    name: "Jhon",
    age: 22,
    gender: "male"
}

// Old way
let nama = person.name;
let umur = person.age;
let jk = person.gender;
console.log(nama, umur, jk)

// New way
let {name, age, gender, born = "Manado"} = person;
console.log(name, gender, age, born)

// Contoh Case
const display =(nama,umur) =>{
      console.log (`Nama saya adalah ${nama}. Umur saya ${umur}`);
}
display(person);

// 3. Array Object
const users = [
    {id: 1, name: "John"},
    {id: 2, name: "Bob"},
    {id: 3, name: "Jade"},
];

let [user1, user2, user3] = users
console.log(user1, user2, user3)

let [
    {id: iduser1, name: name1},
    {id: iduser2, name: name2},
    {id: iduser3, name: name3},
] = users;
console.log(iduser1, name1)

// 4. Kombinasi dengan Rest Operator
const warna = ["Merah", "Kuning", "Hijau", "Biru"];
let [satu, ...lainnya] = warna;

console.log(satu);
console.log(lainnya);