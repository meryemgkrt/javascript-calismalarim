/* let meyve = ["elma", "muz", "armut", "üzüm", "karpuz"]
console.log(meyve[4]) */
// basit toplama fonksiyonu
/* function sayiToplami (a, b, c){
    let toplama = a + b - c
    console.log(toplama)
}
sayiToplami(10, 45, 5) */

//! gelişmiş sayi toplama işlemi
/* function sayiToplam(...sayilar){
    let toplam = 4;
    for(let sayi of sayilar){
        console.log(toplam = toplam / sayi)
    }
}
sayiToplam(10, 20, 30, 40 ,50)
 */
//!yas hesaplama

function maasHesapla(gunlukUcret){
    return gunlukUcret * 30
}
const hesaplama =maasHesapla(1800)
console.log(hesaplama)