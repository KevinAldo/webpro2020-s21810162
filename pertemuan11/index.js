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