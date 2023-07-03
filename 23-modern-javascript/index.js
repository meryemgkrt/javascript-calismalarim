/* const merhabaDünya =function(){
    console.log("merhaba")
}
merhabaDünya();
const selamDünya = ()=>{
    console.log("selam")
}
selamDünya();

const selam = () => console.log("heyyyy")
selam();

const selam1 = (name) => console.log(`Hello, ${name}`)
selam1("Meryem"); */

//!array metods
//?map
/* const nombers =[1, 2, 3, 4, 5]
const squares =nombers.map((x)=> x*x)
console.log(squares) */

//?filter
/* const nombers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const ciftSayi = nombers.filter((x) => x % 2 === 1)
console.log(ciftSayi) */

//?reduce
/* const nombers =[1, 2, 3, 4, 5]
const sum = nombers.reduce((acc, x) => acc - x , 0)
console.log(sum) */
//?find
/* const nombers =[1, 2, 3, 4, 5]
const findNumber= nombers.find((x) => x%2===0)
console.log(findNumber) */

//?some
/* const nombers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumNumbers = nombers.some((x) => x>8)
console.log(sumNumbers) */
//?every
/* const nombers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const everyNumbers = nombers.every((x) => x % 2 === 0)
console.log(everyNumbers) */

//?Spread operaatörğü

/* const nombers =[1, 2, 3, 4]
const add =(x, y, z, w) => x + y + z + w;
console.log(add(...nombers)) */
/* const obje1 = {name:"Meryem", age: 37}
const obje2 = { job: "Öğretmen", ...obje1}
const obje3 = {citi: "Diyarbakir", ...obje2}

console.log(obje3) */
/* const obj = {name:"Meryem", age: 37, job: "Öğretmen"}
const {name, age} = obj;
const newObj ={name, age};
console.log(newObj) */
/* const obj = {name:"Meryem", age: 37, job: "Öğretmen"}
const {name: MeryemName} = obj;
const {age: firstAge} = obj;
console.log(MeryemName) */
/* const numbers =[1, 2, 3, 4, 5]
const [first, second, ...rest] = numbers;
console.log(first)
console.log(second)
console.log(rest) */
/*  const obj =  {name:"Meryem", age: 37, job:"Öğretmen"}
 const {name, age} = obj;
 const newObj = {name, age, citi:"Diyarbakir", ...obj}
 console.log(newObj)
 */

/* 
 const map = new Map();
 map.set("name", "Meryem");
 map.set("age", 37)
 map.set("job","Öğretmen")
 map.forEach((value, key) => console.log(`${key}: ${value}`))
 console.log(map.delete("job")) */

 //?Sets
 
