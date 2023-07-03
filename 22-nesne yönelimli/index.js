/* let araba ={
    renk:"mavi",
    hiz:0,
} */
/* console.log(araba)
console.log(araba.renk)
 */
/*! metod */
/* let araba ={
    renk:"mavi",
    hiz:0,
    hizlandir: function(deger){
        this.hiz += deger;
    },
};
araba.hizlandir(20)
console.log(araba.hiz)
 */
//! constraktor es6

/* class Araba {
    constructor(renk){
        this.renk=renk;
    }
}
let araba =new Araba("mavi") */
//console.log(araba.renk)

/* class Elbise {
    constructor(marka){
        this.marka=marka
    }

}
let elbise= new Elbise("zühre")

class Bilgisayar {
    constructor(islemci){
        this.islemci=islemci
    }
}
let bilgisayar = new Bilgisayar ("intel-core-i7")
console.log(bilgisayar.islemci) */

//! class
/* class Araba {
    constructor(renk){
        this.renk=renk;
        this.hiz=0;
    }
    hizlandir(deger){
        this.hiz +=deger
    }
}
let araba =new Araba("siyah")
araba.hizlandir(200)



class Elbise{
    constructor(renk){
        this.renk=renk;
        this.boy=0;
    }
    boyolcü(deger){
        this.boy +=deger
    }
}
let elbise= new Elbise("mavi")
elbise.boyolcü(100)

class BulasİkM {
    constructor(marka){
        this.marka=marka;
        this.fiyat=0;
    }
    TLfiyat(deger){
        this.fiyat +=deger;

    }
}
let bulasikM = new BulasİkM("boshh")
bulasikM.TLfiyat(12000)

class KPSS{
    constructor(puan){
        this.puan=puan;
        this.sorusayi=0;
    }
    sorus(deger){
        this.sorusayi +=deger
    }
    
}
let kpss =new KPSS("85")
kpss.sorus(90)
console.log(kpss.puan)
console.log(kpss.sorusayi) */


/* class Araba {
    constructor(renk){
        this.renk=renk
    }
}

class MotorluAraba extends Araba{
    constructor(renk, motor){
        super(renk);
        this.motor=motor;
    }
}
let araba= new MotorluAraba("siyah", "V8")
console.log(araba.motor)
console.log(araba.renk)
let arabası =new Araba("kırmızı")
console.log(arabası.renk) */

//!Kapsülleme
/* class Araba{
    #renk;
    constructor(renk, hiz){
        this.#renk=renk;
        this.hiz= hiz;
    }
    getRenk(){
        return this.#renk
    }
    setRenk(renk){
        this.#renk=renk;
    }
}
let araba =new Araba("siyah", 25);
console.log(araba.getRenk())
araba.setRenk("blue")
console.log(araba.getRenk()) */
//!Çok metodluluk

class Datebase {
    constructor(date){
        this._date=date;
    }
    getDate(){
        return this._date;
    }
    setDate(value){
        this._date=value;
    }
}
class DateController extends Datebase{
    constructor(date){
        super(date);
    }
    getDate(){
        return "Date :" + super.getDate();
    }
}
let dateBese = new Datebase("Meryem")
console.log(dateBese._date)
let dateControler= new DateController("Arif")
console.log(dateControler._date)