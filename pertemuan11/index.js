/*
    Arrow Function
*/
// Single argument
// const calcAge = (year) => {
//     return 2020 = year;
// };
// const calcAge = (birthYear, CurrentYear) => {
//     return CurrentYear = birthYear;
// };

// No argument
// const calcAge = () => {
//         return 2020 - 1992;
// };

// No argument with Implicit return value
// const calcAge = () => 2020 - 1992;
// console.log(calcAge());

// const years = [1990, 1992, 2001, 2005];

// const calcAge5 = years.map(function(el){
//     return 2020 - el;
// });

// const calcAge6 = years.map((el) => 2020 - el);
// console.log(calcAge6);

//Default Parameter
// const calcAge = (birthYear, CurrentYear) => CurrentYear - birthYear;

// console.log (calcAge(1991));

/*
Di Javascript ES6, ada cara baru dalam penulisan sebuah fungsi, yaitu menggunakan arrow function.
Kelebihan menggunakan arrow function adalah penulisan fungsi menjadi lebih singkat dan lebih mudah dibaca.
*/
// 1. fungsi dengan parameter
const operasiPenjumlahan = (bilangan1, bilangan2) =>
  {
    const hasil =  bilangan1 + bilangan2;
    return hasil;
  };
  const operasiPengurangan = (bilangan1, bilangan2) =>
  {
    const hasil =  bilangan1 - bilangan2;
    return hasil;
  };
  console.log(operasiPenjumlahan(5, 6)); // Output: 7
  console.log(operasiPengurangan(8,3)); // output: 5

// 2. fungsi yang tidak memiliki parameter
const namaJenisMobil = () => 
  {
    const mobil = ["Xenia", "Toyota", "Avanza"];
    return mobil[Math.floor(Math.random()*(mobil.length))];
  }
const jenisBuah = () => 
  {
    const buah = ["apple", "mangga", "semangka"];
    return buah[Math.floor(Math.random()*(buah.length))];
  }
  console.log(namaJenisMobil());
  console.log(jenisBuah());
//Exercise
//Convert to ES6 Syntax
const yearsUntilRetirement = (year , firstName ="Kevin Aldo") => {
    const age =`${28}`;
    const retirement = 65 - age;
    if (retirement > 0) {
      console.log(`${firstName} retired in ${retirement} years` );
    }
    else {
      console.log(`${firstName} is already retired`);
    }
  }

yearsUntilRetirement(1999);