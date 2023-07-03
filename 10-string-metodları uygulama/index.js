let url = "https://www.bilgisayargenetigi.com"
let youtube = "Bilgisayar Genetiği"
let result;

//!1- karakter sayısı bulma

result = url.length
result = youtube.length
result =youtube.replace(" ", " ").length



//!2- Youtube değişkeni kaç karakterden oluşur
result = youtube.split(" ").length
result = url.split(".").length
console.log(result)

//!3-Kanal adı başlangıç kontrol

result = youtube.startsWith("Bilgisayar");
result = url.startsWith("https")
if(result){
    console.log("yapılacaklar")
}else{
    console.log("false döndü")
}


//!4- Kelime kontrolü

if(youtube.indexOf("Genetiği") > -1){
    console.log("çalıştı")
}else{
    console.log("çalışmadı")
}

//!5-Kelimeleri birleştir

youtube = youtube.toLocaleLowerCase().replace(" ", "-")
url = url.replace("com", "com/")
let newUrl =url.replace(url, url + youtube)
newUrl =`${url}/${youtube}`
console.log(newUrl)