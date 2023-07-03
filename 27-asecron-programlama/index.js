//?Asenkron programlama
/* console.log("1.ilem");

setTimeout(()=>{
    console.log("2.işlem")
}, 3000);
console.log("3.işlem"); */

//?callback fonksiyonlama

/* function sayHello(name, callback){
    callback();
    console.log(`Hello ${name}`);

}
function goodbye(){
    console.log("Görüşmek üzer");
}
sayHello("meryem", goodbye); */

/* function gel (isim, callback){
    callback();
    console.log(`Merhaba ${isim}`)
}
function git(){
    console.log("Sonra görüşelim")
}
gel("arif", git); */

//?Ajax ve Http İstekleri

/* const xhr =new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = ()=>{
    const response =xhr.responseText;
    if(xhr.status ===200){
console.log(JSON.parse(response))
}else{
    console.log("Hata oluştu:" + xhr.status)
}
}
xhr.send(); */
/* let myList;
const lty =new XMLHttpRequest();
lty.open("GET","https://jsonplaceholder.typicode.com/comments?postId=1");
lty.onload = ()=>{
    const response =lty.responseText;
    if(lty.status ===200){
        myList=JSON.parse(response)

    }else{
        console.log("hatalİ:" + lty.status)
    }
}
lty.send() */

/* //?Promisns nedir
const number = Math.floor(Math.random() * 100);
if(number % 2 === 0){
    console.log(number, "Çift sayi")
}else{
    console.log(number, "tek sayi")
} */
/* 
function getRandomNumber(){
    return new Promise((resolve, reject) =>{
       setTimeout(()=>{
        const number = Math.floor(Math.random() * 100);  
        if(number % 2 === 0){
            resolve(number);
        }else{
            reject(`Hata: ${number} sayisi tek sayidir`)
        }  
    })
       })
}
getRandomNumber()
.then((number) => console.log("Çözümlendi:" + number))
.catch((error) => console.log(error)) */

//?Fetch

/* fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error)); */

/*   const response = fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
  console.log(
    response
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
  
    ); */
//? Asyc & Await

/* async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    const data = await response.json();
    console.log(data)
} */
const getData = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
    const data = await response.json();
    console.log(data)  
}
getData()