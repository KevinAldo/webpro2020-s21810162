/*
    Conditional & Loop
*/

//Conditional - persyaratan
//cara menulis conditional
//1. menggunakan if, else if dan else
/*if - apabila hanya ada 1 kondisi dan 1 keputusan yang dijalankan*/
let nilaiSiswa1 = 95;

if (nilaiSiswa1> 80) {
  console.log("SANGAT MEMUASKAN");
}
/*else if - apabila ada 1 kondisi dan 2 keputusan yang dijalankan*/
let nilaiSiswa2 = 75;
if (nilaiSiswa2> 80) {
    console.log("SANGAT MEMUASKAN");
  }
else if (nilaiSiswa2>= 60 && nilaiSiswa2<= 80) {
    console.log("MEMUASKAN");
}  
/*else - apabila ada beberapa kondisi dan beberapa keputusan yang 
         dijalankan*/ 
let nilaiSiswa3 = 55;
if (nilaiSiswa3> 80) {
    console.log("SANGAT MEMUASKAN");
  }
else if (nilaiSiswa3>= 60 && nilaiSiswa3<= 80) {
    console.log("MEMUASKAN");
}
else {
console.log("JANGAN MENYERAH, COBA LAGI!");
}

//2. Menggunakan switch dan case
let mataKuliah;
let hari = "selasa & rabu";

switch (hari) {
/*switch digunakan untuk mendeklarasikan pernyataan yang menjadi 
patokan kondisi.*/

  case "senin & kamis":
/*case digunakan untuk menulis masing-masing kondisi dari hasil 
pernyataan yang akan diperiksa.*/
    mataKuliah = "SAD & OOAD";
    break;
/*break digunakan untuk menghentikan program berjalan ketika sudah 
menemukan kondisi yang tercapai.*/
  case "selasa & rabu":
    mataKuliah = "WebPro & Statistik";
    break;
  default:
/*default adalah keputusan yang akan dijalankan apabila hasil 
pernyataan di switch tidak ada yang sesuai dengan masing-masing 
kondisi di case.*/
    mataKuliah = "tidak ada kelas";
}
console.log(mataKuliah);

/*loop - sekumpulan kode yang akan dijalankan berulang kali sampai 
batas yang ditentukan.*/

/*Ada 5 jenis loop di JavaScript, yaitu:*/
//1. for
for (let i = 0; i <= 10; i++) {
    console.log("angka ke-" + i);
  }
  
/*2. for...in - digunakan untuk mengulang setiap properti dari sebuah 
objek.*/
const matkul = {
    namaMatkul: "Web Programming",
    fakultas: "Ilmu Komputer",
    Prodi: "Sistem Informasi",
    credit: 3
};
for (x in matkul) {
  console.log(x, ':', matkul[x]);
}

/*3. for...of -  digunakan untuk mengulang setiap element dari objek 
yang bisa diulang (contoh array atau string).*/
const buku = ["Game of Thrones: A Song of Ice and Fire",  
   "Harry Potter and The Philosopher's Stone", 
   "Lord of The Rings: The Fellowship of The Ring"
];

for (x of buku) {
  console.log(x);
}

//4. while
//5. do...while

