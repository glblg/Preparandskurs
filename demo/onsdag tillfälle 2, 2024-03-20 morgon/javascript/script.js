/*

// 3) ARRAYER

let foo = 888;

foo = true;

// index:     0     1      2
let lista = ['Matilda', '1John', 'Alrik', 'Carl Gustav Ludvig']; //deklarationen

//lista[2] = false // tilldelning i en array (glöm ej [index])

lista.push(123); // lägger till på slutet
lista.unshift('hejsan'); // lägger till på början

lista.pop(); //tar bort från slutet
lista.shift(); //tar bort från början

lista.sort(); //sortera i alfabetisk ordning

//Glöm ej index [0]
//lista = 123 // om ni glömmer , lista blir till en variabel
//foo = ["hejsan", 456, true]

console.log(foo);
console.log(lista[2]);
console.log(lista);

document.write(`<h1> ${lista[2]} ÄR HÄR!!! </h1>`);
document.write(lista[2]);

// (4) if satser
// condition är koderr som ger sant / falskt
//   ==  lika med
//   === lika med + datatyp
//   <   mindre än
//   >   större än
//  <=   mindre än eller samma
//  >=   större än eller samma
//  !=    inte lika med

if (age >= 18) {
    console.log('JAG ÄR VUXEN');
} else {
    console.log('Jag är mindreårig');
}

// {} curly bracket är till för att bunda ihop flera koder annars så tar if satsen 1 kod
*/

let age = 32; // vad händer om det är 10?
let vip = false; // very important person!!


// 1) if satser i serie
/*if (age >= 18) {
    console.log('du är vuxen , du får komma in 1');
} else {
    console.log('du för liten tyvärr ni får ej komma in.. 1');
}

if (vip == true) {
    console.log('du är en kändis du får rabatt 2');
} else {
    console.log('du en vanlig människa... 2');
}*/

// 2) if sats efter sant
/*
if (age >= 18) {
    console.log('du är vuxen , du får komma in 1');

    if (vip == true) {
        console.log('du är en kändis du får rabatt 2');
    } else {
        console.log('du en vanlig människa... 2');
    }

} else {
    console.log('du för liten tyvärr ni får ej komma in.. 1');
}
*/

// 3 )   if sats efter falskt
/*
if (age >= 18) {
    console.log('du är vuxen , du får komma in 1');
}else {
    console.log('du för liten tyvärr ni får ej komma in.. 1');
    if (vip == true) {
        console.log('du är en kändis du får rabatt 2');
    } else {
        console.log('du en vanlig människa... 2');
    }
}
*/

// 3 else if sats
if (age >= 18) {
    console.log('du är vuxen , du får komma in 1');
}else if (vip == true) {
    console.log('du är en kändis du får rabatt 2');
}else {
    console.log('du en vanlig människa... 2');
}


//3 if sats med 2/flera conditions
// && och  and    (petig allt måste vara sant) 
// || eller  or   (generös för att se sant)
if( age >= 18 || vip == true ){
    console.log("SANT!!");
}else{
    console.log("FALSKT!!!");
}

console.log(  document.getElementsByTagName("input")[1].value );
