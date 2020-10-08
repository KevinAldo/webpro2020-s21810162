/*
    Rest & Spread Operator
*/

// Rest Parameter
// Old way 
// const hitung = (a, b, c, d, e) =>{
//   const angka = [a, b, c, d, e];
//   let total = 0;
//   for(let i = 0;i<5;i++){
//      total = total + angka[i];
//  }
//  return total;
// }
// console.log(hitung(1, 2, 3, 4, 5, 6, 7));

// New way
const hitung = (...angka) => {
   let total = 0;
   angka.forEach((el) => {
       total = total + el;
   });
   return total;
};
console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// Harus berada di paling terakhir
const hitung1 = (param1, param2, ...params) => {
   console.log(param1);
   console.log(param2);
   console.log(params);    
   let total = 0;
   params.forEach((el) =>{
       total = total + el;
   });
   return total;
};
console.log(hitung(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Spread Operator
//1. duplikasi array
const number1 = [1, 2, 3, 4, 5];
const number2 = [...number1];
number1[0] = 10;
console.log(number1);
console.log(number2);

//2. Menggabungkan array
const number1 = [1, 2, 3, 4, 5];
const number2 = [6, 7, 8, 9, 10];
const number3 = [12, 13, 14, 15];

const gabung5 = number1.concat(number2, number3);
console.log(gabung5);

const gabung6 = [...number1, ...number2, 11, ...number3];
console.log(gabung6);

//3. Menambahkan array
let orang = {
    nama: "John",
    umur: 20,
  };
orang = {...orang, pekerjaan: "Guru", pendidikan: "S2"}
console.log(orang);

//4. Menggabungkan Object
const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const mergeObj = {...obj1, ...obj2};
console.log(mergeObj);