var kullanici ="Global scope: Meryem"


function isimYazdir() {
   let kullanici = "Function scope: Arif"
    console.log(kullanici)
}

console.log(kullanici)
isimYazdir()
if(true){
    var kullanici = "if scope: Elif"
    console.log(kullanici)
}