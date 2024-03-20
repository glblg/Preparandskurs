/*// 2)  Datatyper

let x 
// number
x = -5    // integer, long / heltal
x = 1.25  // float, double / decimaltal

// String
x = "hejsan" // String / sträng, text
x = `@`     // character char/ karaktär ,tecken

// boolean
x = true    // boolean bool/( boolean)

//String + String = String
//Number + String = String
//boolean + String = String

//Number + Number = Number
//Number + boolean = Number

// boolean + boolean = Number

*/

// 3) Arrayer

// variabel
let foo = 5

// array
// index        0       1        2       3
let grupp = [ "Ulf" , "Elin" , "Emily","Lara"]

grupp[4] = "Alrik" // lägger till indexen med värdet

grupp.push("hello") // lägger till på slutet
grupp.unshift("hejsan")// lägger till på början

grupp.pop() //tar bort på slutet
grupp.shift() //tar bort i början

grupp.sort() // sortera arrayn i alfabetisk ordning

grupp = true // va försiktig när ni tilldedlar utan [index]

foo = [5,10] // man kan tilldela arrayer också

console.log(grupp);


// (4) if satser

// condition  

// == jämförelse
// === lika med + jämför datatypen
// < mindre än
// > större än
// <= mindre än eller lika med
// >= större än eller lika med
// != inte lika med

let age = 32 // Alriks ålder
let vip = false // very importat person
// && och (prettig allt måste vara sant)
// || eller (generös något är sant då allt sant)

if (  age >= 18  ||  vip == true ) {
    console.log( "SANT" );
}else {
    console.log( "FALSKT" );
}



let valueInInput  = document.getElementsByTagName("input")[0].value



