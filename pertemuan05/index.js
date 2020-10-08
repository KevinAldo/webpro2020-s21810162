/*
    1. Array
       Variable yang bisa menampung lebih dari 1 nilai
*/

let angka = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(angka);
let buah = ["mangga", "apel", "jeruk"];
console.log(buah);

let arr = ["text", 1, true];
console.log(arr);

let myFunc = function() {
    return "Hello Array";
};

let arr2 = ["text", 1, true, myFunc(), []];

/*mengakses element dalam array*/
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2]);

console.log (typeof arr2);
console.log (arr2, length);

/*deklarasi array menggunakan kata kunci new*/
let buah1 = new Array("salak", "jambu", "melon");
console.log(buah1[2]);

/*Manipulasi Array*/
/*1. Menambah isi Array*/
let mhs=[];
mhs[0] = "kevin";
mhs[1] = "jhon";
mhs[2] = "jane";
console.log(mhs);

/*2. mengubah isi array*/
mhs[1]= "donny";
console.log(mhs);

/*3. menghapus isi array*/
mhs[2] = undefined;
console.log(mhs);

/*4. menampilkan isi array*/
let mhs1 = ["john", "kevin", "jane"];
for (let i=0; i<mhs1.length; i++){
    console.log("Mahasiswa ke-" + (i + 1) + " adalah " + mhs1[i]);
}

/*method dalam array*/
/*1. length - jumlah data yang ditampung dalam Array*/
/*2. toString - menggabungkan semua element array dan mengubahnya 
     ke tipe data string dengan penghubung tanda koma , di antara 
     element array*/
let mhs2 = ["jhon", "bob", "kevin"];
console.log(mhs2.toString());

/*3. join - menggabungkan semua element array, kemudian 
     mengubahnya menjadi string*/
console.log(mhs2.join(" - "));

/*perbedaan toString - join bisa menambahkan karakter tertentu 
  sebagai penghubung antara element array

/*4. push - menambah element di bagian akhir dari sebuah array 
     pop - mengeluarkan element terakhir dari sebuah array
     unshift - menambah element di bagian awal array
     shift - mengeluarkan element pertama dari sebuah array*/
mhs2.push("stenly");
mhs2.push("jane");
console.log(mhs2.join(" - "));
mhs2.pop();
console.log(mhs2.join(" - "));

mhs2.unshift("aldo");
console.log(mhs2.join(" - "));
mhs2.shift();
console.log(mhs2.join(" - "));

/*5.concat - untuk menggabungkan 2 array atau lebih*/
let sayur = ["kangkung", "wortel", "bayam"];
let buah2 = ["pisang", "nenas", "anggur"];
let makanan = sayur.concat(buah2);
console.log(makanan);

/*6. splice - untuk menambah, menghapus, dan mengganti element di 
     sebuah array.*/
buah2.splice(2, 1, "melon", "semangka");
console.log(buah2.join(" - "));

/*7. slice - untuk mengambil beberapa element pada array, dan 
     menaruhnya pada array baru.*/
let buah3 = buah2.slice(0, 3);
let hasilBuah = buah2.slice(3);
console.log(buah3.join(" - "));
console.log(hasilBuah.join(" - "));

/*8. forEach - menjalankan fungsinya untuk setiap elemen dengan 
     mengeksekusi dari index terkecil ke yang terbesar.*/
let number = [1, 2, 3, 4, 5, 6, 7];
let showNumber = function (el){
    console.log(el);
};
number.forEach(showNumber);

/*8. map - membentuk array baru yang di dapat dari array itu 
           sendiri dan dapat mengembalikan nilai return.*/
let number1 = number.map (
    function (el1){
    return el1;
});
console.log(number1);

/* info mengenai forEach dan map
   forEach() — sangat cocok ketika tidak ingin mengubah nilai 
   datanya itu sendiri misalkan memasukan data ke database.
   map() — dapat digunakan untuk perubahan data dalam bentuk array.
*/

/*9. sort - mengurutkan element di suatu array, bisa dari nilai 
     yang terkecil hingga yang terbesar, bisa juga sebaliknya.*/
let num = [1, 6, 3, 9, 5];
let mah = ["jhon", "bob", "kane"];
mah.sort();
console.log(mah);
let terkecil = function (a, b){
    return a - b; //terkecil - terbesar
};
console.log(num.sort(terkecil));
let terbesar = function (a, b){
    return b - a //terbesar - terkecil
};
console.log(num.sort(terbesar));

/*10. filter*/
let lebihKecil = num.filter(function (el){
    return el < 5;
});
let lebihBesar = num.filter(function (el){
    return el > 5;
});
console.log(lebihKecil);
console.log(lebihBesar);
