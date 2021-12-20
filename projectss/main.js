/*var = variable değişken
EGMA SCRİPT 6 YAZIM TEKNİĞİ
const = sabit değer tekrar atanamaz olarak ifade edebiliriz.
alert(d+b);
alert(d+"hllbr");
var s = prompt();//direkt olarak kullanıcıdan değer almamızı sağlayan bir fonksiyon 
console.log("Kullanıcının girdiği değer " +s);
prompt("ismin ne ? ");
console.log(2);
console.log(2+2);
var x = 2;
console.log(x);
const a = 0;
//a = 5;//failed
let b = 0;//sabit olmayan bir değişken tanımalamamızı sağlıyor.
b = 58;
console.log(b);
console.log(typeof b);
console.log(typeof a);
console.log(typeof x);
const d = 5;
const k = "6aasdad";
const result = d+k;
console.log(result);
console.clear();
let yas = 17;
function yasS(){
    if(yas>18){
        //console.log("Mekana hoş geldin gral");
        return true;
    }else{
        return false;
    }
}

console.log(yasS());

fonksiyon tanımı = 
anonim şekilde fonksiyon tanımı yapılabiliyor.
function(){
    alert("be");

}
fonksiyonlar sabit değer olarakta atanıyor const bir ifade yazıp fonksiyona eşitlenebiliyorlar 
const aa = function(){
    alert("HLLBR is Developer");

}
aa();

//ES6 fonksiyon tanımı = 

const abt = () => {
    alert("hırr");

}
abt();
const abc = (name,surname) =>{
    alert(name+" " +surname);
}
//parametreli ES6 fonksiyon yazımı  
abc("deli","voper");

const canDrive = (name,yas) =>{
if(yas>=18){
    return "Hi "+name+" you can car";
}else{
    return "Hi "+name +" you can'not car";
}
}
alert(canDrive("hllbr",26));
//Diziler Arrayler =
const a = ['ww','apple',"oppo",'hp',[12123,54,'nova'],() => {alert("Hi")}];
console.log(a.length);
console.log(a);
console.log(a[4]);
for(var conter =0;conter<a.length;conter++){
    console.log(a[conter]);
}
a[5](); //Array içerisinde tanımanmış bir fonksiyonun kullanılması aktif edilme olarak ifade edebiliriz.
//shift() komutu operasyonu ilk elemanı çeker alır ve yazdırır listeden çıkarır.
var a = brands.shift();
console.log(a);
console.log(brands);
//pop() opeasyonu son elemanı alır döner ve listeden çıkarır.

var a = brands.pop();
console.log(a);
console.log(brands);
const a = brands.map((value)=>{
    return value+"!"
})//burada map () fonksiyonu yardımı ile yeni bir array oluşturduk
console.log(a);
brands.forEach((value,index)=>{
    console.log(value +" " +index);
})
const brands = ["apple",12,"123","cde"];
//forEach fonksiyonu içerisine bir adet fonskiyon alıyor. fonksiyonun ilk elemanı ve indexini alabilirim.
let a = brands.map((value)=>{
    return value+"!"
})//burada map () fonksiyonu yardımı ile yeni bir array oluşturduk
//console.log(a);
 a = brands.filter((value,index) =>{
    return index !== 0 && value !== 12;
})

console.log(a);
while(i<=100){
    console.log(i);
    i++;
}
//js selectors-Seçiciler = 

document =" js taglarını kullanılabilir hale getirdi"
document.getElementById()// id ye göre bir element alma
document.getElementsByClassName//class ismine göre birden fazla element alma 
document.getElementsByTagName//tag -etikete göre birden fazala element alma
document.querySelector(".list");
document.querySelector(".h1");
//idler için querySelector
document.querySelector("#par1");//id si par1 olan sonucu getiriyor.
//çoklu sonuç dnömesini istediğimizde 
document.querySelectorAll('h1');
document.querySelectorAll('.list');
*/

const ilkSayi = document.getElementById("birinci-sayi");
const ikinciSayi = document.getElementById("ikinci-sayi");
const btnTopla = document.getElementById("btn-topla");
const btnCıkar = document.getElementById("btn-cıkar");
const btnCarp = document.getElementById("btn-carp");
const btnBol = document.getElementById("btn-bol");
const result = document.getElementById("result");
//Butonlarla ilgili olarak bir eventList oluşturuyorum
btnTopla.addEventListener('click',() =>{
    const x = parseFloat(ilkSayi.value) || 0;//ilk sayi değişkeni içerisindeki değeri almış oluyoruz.
    const y = parseFloat(ikinciSayi.value) || 0;//|| içerisinde değer yoksa 0 olarak al diyoruz.Default değer atıyoruz.
    result.innerHTML = (x+y);
})

btnCarp.addEventListener('click',() =>{
    const x = parseFloat(ilkSayi.value) || 0;//ilk sayi değişkeni içerisindeki değeri almış oluyoruz.
    const y = parseFloat(ikinciSayi.value) || 0;//|| içerisinde değer yoksa 0 olarak al diyoruz.Default değer atıyoruz.
    result.innerHTML = (x*y);
})
btnBol.addEventListener('click',() =>{
    const x = parseFloat(ilkSayi.value) || 0;//ilk sayi değişkeni içerisindeki değeri almış oluyoruz.
    const y = parseFloat(ikinciSayi.value) || 0;//|| içerisinde değer yoksa 0 olarak al diyoruz.Default değer atıyoruz.
    result.innerHTML = (x/y);
})
btnCıkar.addEventListener('click',() =>{
    const x = parseFloat(ilkSayi.value) || 0;//ilk sayi değişkeni içerisindeki değeri almış oluyoruz.
    const y = parseFloat(ikinciSayi.value) || 0;//|| içerisinde değer yoksa 0 olarak al diyoruz.Default değer atıyoruz.
    result.innerHTML = (x-y);
})