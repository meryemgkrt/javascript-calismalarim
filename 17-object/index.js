/* let customers1 = ["meryem", ["aa", "bb", "cc", [10, 12, 13]]]

console.log(`Ürün Sahibi:${customers1[0]} Ürün:${customers1[1][0]} Fiyatı:${customers1[1][3][0]}`)
 */

let customer = {
    "Ad": "Meryem",
    "SoyAd" : "Kurt",
    "Yaş": 37,
    "Meslek": "Öğretmen",
    "Yasadigi Sehir": "Diyarbakir",
}
console.log(customer.Ad, customer.SoyAd, "Yaşı:" + customer.Yaş,"mesleği :" + customer.Meslek,"yaşadığı şehir:" + customer["Yasadigi Sehir"])