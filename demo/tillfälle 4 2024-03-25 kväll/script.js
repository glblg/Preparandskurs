'use strict' // ha strikta regler
let money = 1000000
// 7) Object

let foo = 5
foo = 10

//index       0       1          2       ....
let lista = [5 , "yxgatan 5c", true]
lista[0] = 1000000

//  properties   key:value (key value pair)      
// object med en metod + en array
let house = { 
    price:5 ,
    adress:"yxgatan 5c",
    sold:true,
    subtraction: function (tal1,tal2) {
        return tal1 - tal2
    },
    lista: ["Emily","Sebastian","Ulf","Alrik"]
}

house.price = 1000000
house["price"]= 5000000  // endast js

house.subtraction(5,2)
let inputDOM = document.getElementsByTagName("input")[0]
console.log(foo);
console.log(lista);
console.log(house);
document.write("hej")
console.log(document.title); //document = index.html


let alriksConsole = {
    log: function (meddelande){
        console.log(meddelande); 
    } 
}

// array med en anna array och ett object i sig
let array2d = [ { 
    price:5 ,
    adress:"yxgatan 5c",
    sold:true,
    subtraction: function (tal1,tal2) {
        return tal1 - tal2
    }
},888, "Alrik" , true , ["Emily","Sebastian","Ulf"] , false  ]

//let tomArray = []

for ( var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);

// block scope / closure


/* 
{
    {
        var x= "FOUND YOU!! VAR"
        var x= "HAh FOUND YOU!! VAR"
        console.log(x)

    }
    console.log(x)
}     
console.log(x)


 {
    let y = "FOUND YOU!!"
    //let y = "hah FOUND YOU!!"
    {
        console.log(y)
    }
    console.log(y)
}     
console.log(y) 
 */

//let money = "Svenska kronor"

// Math.PI
const PI = 3.141592653589793
//PI = 4

const bil ={
    color: "red",
    chassi: "SUV",
    regnr: "obm512",
    age: 4
}
bil = 888
bil.color = "blue"

money += 100