/*
    Object - sesuatu yang memiliki properti dan nilai
*/
const mhs = ["kevin", "aldo", 20, false];

/*Cara mendeklarasi object*/

//1. Object literals
const mhs1 = {
    namaDepan: 'kevin',
    namaBelakang: 'aldo',
    umur: 20,
    lulus: false,
    //object dalam object
    alamat: {
        jalan: 'Jln. Arnold Mononutu',
        kecamatan: 'Airmadidi',
        kabupaten: 'Minahasa Utara',
    },
    //array dalam object
    IP: [3.5, 3.6, 3.7, 3.8],
    //fungsi dalam object
    
    hasilIP: function() {
        let total = 0;
        this.IP.forEach(function (el){
            total = total + el;
        });
        this.IPKumulatif = total /4;
    },
};
delete mhs1.namaBelakang;

console.log(mhs1.alamat.jalan);
console.log(mhs1.IP[2]);
mhs1.hasilIP();
console.log(mhs1);


//2. kata kunci new
const mhs2 = new Object();
mhs2.namaDepan = 'aldo.';
mhs2.namaBelakang = 'L';

//Mengakses properti object
//1. dot notation
console.log(mhs1.umur);

//2. bracket notation
console.log(mhs1['namaDepan']);

//Array object (JSON)
const mahasiswa = [
    {
    nim: "001",
    namaDepan: "Kevin",
    namaBelakang: "Aldo",
    },
    {
    nim: "002",
    namaDepan: "Aldo",
    namaBelakang: "L",
    },
    {
    nim: "003",
    namaDepan: "Web",
    namaBelakang: "Pro",
    },
];

mahasiswa.forEach(function (el1){
    console.log(el1);
});