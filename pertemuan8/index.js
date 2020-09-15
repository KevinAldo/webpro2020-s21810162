/*
    Exercise #02
*/
/*1. Buatlah object dengan nama account dengan 2 properti, yaitu:
   -name bertipe data String
   -expenses bertipe data array
2. Buatlah function dengan nama addExpenses() dimana function tersebut menerima 2 argument 
   yaitu description dan amount. Masukan kedua argument tersebut ke dalam object dan dengan  
   menggunakan method push(), tambahkan object tersebut ke dalam properti expenses pada object 
   account yang dibuat di nomor 1
3. Buatlah function dengan nama getAccountSummary(). Function ini tidak memiliki argument. 
   Dengan menggunakan forEach hitung totalExpense pada properti expenses, dengan menjumlahkan 
   semua amount pada object yg dibuat di nomor 2. Tampilkan menggunakan console log dengan 
   tampilan sebagai berikut 'Total pengeluaran <name> adalah Rp.<total expenses>'.
4. Panggil fungsi addExpenses dan getAccountSummary.*/

//No. 1
const account = {
    name: 'Kevin Aldo',
    expenses: [],
    addExpenses: function(description, amount){
        this.expenses.push({"description": description, "amount": amount});
    },
    getAccountSummary: function (){
        let totalExpenses = 0;
        this.expenses.forEach(function (element){
            totalExpenses = totalExpenses + element.amount;
        });
    return totalExpenses;
    },
};
account.addExpenses("Harga Minuman", 10000);
account.addExpenses("Harga Makanan", 35000);

console.log("total pengeluaran " + account.name + " adalah: Rp." + account.getAccountSummary());