let meyve = ["elma", "muz", "armut", "üzüm", "karpuz"];

for (let i = 3; i < meyve.length; i = i + 1) {}

//!0'dan 100'e kadar 2'şer 2'şer yazdırma
for (let i = 0; i <= 100; i = i + 8) {}

/* 
 for(let i = 0; i<sayilar.length; i++){
  console.log(toplam =toplam + sayilar[i])
 } */

//!kısa yol index
/*  let sayilar = [ 10, 50, 55, 44, 60, 100]

let toplam = 0;
for(let i in sayilar){
  console.log(toplam = toplam +sayilar[i])
}
 */
//!baska bir kısa yol
/* let sayilar = [ 10, 50, 55, 44, 60, 100]

let toplam = 0;
for(let sayi of sayilar){
  console.log(toplam +=sayi)
} */

//objek ile döngü
/* 
const user =[ {
  ad: "Meryem",
  soyad: "Kurt",
  yas: 37
},
{
  ad: "Arif",
  soyad: "Kurt",
  yas: 37
},
{
  ad: "Elif",
  soyad: "Kurt",
  yas: 37
}]
for(let key in user){
  console.log(user)
}
 */
const ogrenci = [
  {
    ad: "Gül Bahar",
    soyad: "UÇAR",
    sinif: "11-C",
    no: 135,
    yas: 16,
  },
  {
    ad: "Elif Eylül",
    soyad: "GÖK",
    sinif: "11-C",
    no: 345,
    yas: 16,
  },
  {
    ad: "Sultan",
    soyad: "ÇAKMAK",
    sinif: "11-C",
    no: 426,
    yas: 16,
  },
];
for(let i = 0; i< ogrenci.length; i++){
  console.log(ogrenci[i].no)
}