/*
    Destrukturisasi Array
*/

// memecah item pada Array
// memecah properti pada objek
let Buah = ["pisang", "apel", "mangga"];
let [buah1, buah2, buah3] = buah-buahan;
console.log(buah1)
console.log(buah2)
console.log(buah3)

//Contoh Desktrkturisasi Array ES6
// let[univ, , fakultas, , mataKuliah] = ["Universitas","Klabat","Ilmu Komputer","SI","Web Programming"]
// console.log(univ);
// console.log(fakultas);
// console.log(mataKuliah);

// Cara menukar 2 variable atau lebih
// Cara Lama
// let a = 10;
// let b = 20;

// variabel tambahan sementara
// let temp = a;
// a = b; nilai a sekarang adalah 20
// b = temp; nilai b sekarang adalah 10
// console.log(a)
// console.log(b)

// Cara Baru
let a = 10;
let b = 20
[a,b] = [b,a];
// nilai a sekarang adalah 20, dan nilai b adalah 10
console.log(a)
console.log(b)

// Destrukturisasi Object
let orang = {
    nama: "Kevin",
    umur: 20,
    Married: false
};
let{nama, umur, MarriedStatus} = orang;
console.log(nama)
console.log(umur)
console.log(MarriedStatus)

// Ubah nama variabel dalam properti
// let people = {
//     name: "Aldo",
//     age: 20
// };
// let {name: nama, age: umur} = people;
// console.log(nama)
// console.log(umur)

// Destrukturisasi Object Bertingkat
let siswa = {
    kelas: "10",
    nama: ["Naruto", "Sasuke", "Sakura"],
    prestasi: {
      olahraga: "Hokage",
      akademik: "Shadow Hokage"
    }
};
  
let {
    prestasi: { olahraga }
} = siswa;
console.log(olahraga);