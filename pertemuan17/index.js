
/*
JavaScript Asynchronous
1. Synchronous vs Asynchronous
   Apa itu Synchronous?
   • Program dalam JavaScript secara default akan dieksekusi baris per baris
   • Secara default, proses di JavaScript akan di eksekusi secara Synchronous, artinya
     baris selanjutnya akan dieksekusi setelah baris sebelumnya selesai dikerjakan
   • Proses Synchronous juga biasa disebut Blocking, karena harus menungu tiap proses
     selesai baru proses selanjutnya bisa dilakukan.
   Apa itu Asyncronous?
   • Walaupun secara default proses di JavaScript dieksekusi secara Synchronous, namun
     kita bisa membuatnya menjadi Asyncrounous
   • Berbeda dengan proses Synchronous, pada proses Asynchronous, JavaScript tidak
     akan menunggu proses tersebut selesai, melainkan JavaScript akan melanjutkan
     baris selanjutnya, tanpa harus menunggu proses Asynchronous selesai.
   • Jika proses Asynchronous sudah selesai maka, Asynchronous akan mengembalikan
     hasilnya melalui callback.
   • Proses Asynchronouse juga biasa disebut Non-Blocking.
2. Callback
   Apa itu callback?
   • Callback merupakan mekanisme untuk memanggil kembali kode yang ada di program
     JavaScript dari proses Async
   • Callback biasanya dibuat dalam bentuk function, dan function itu akan dieksekusi
     saat proses Async selesai
   • Dengan menggunak callback, program bisa menerima informasi yang dibutuhkan
     dari proses yang berjalan secara Async
3. Promise 
   Apa itu Promise?
   • Promise merupakan proxy untuk nilai dimasa depan (future) yang belum diketahui
     saat pembuatan Promise tersebut
   • Berupa object yang melakukan tracking apakah suatu event sudah terjadi atau belum
   • Biasa Promise digunakan untuk proses Async
*/