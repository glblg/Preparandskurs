// 2A
/* let i = 0
while(  i < 10 ){
    //console.log(i)
    let p = i/2
    console.log(p)
    if( p == 0 || p == 1|| p == 2 || p == 3 || p == 4  ) document.write("O")
    if( p == 0.5 || p == 1.5 || p == 2.5 || p == 3.5 ||p == 4.5 ) document.write("X")
    i++; // i ökar med 1
} */

/* let i = 0
while(  i < 10 ){
    if( i%2 == 0 ) document.write("O")
    else document.write("X")
    i++; // i ökar med 1
} */

/* for (let i = 0; i < 20; i++) {
    document.write("O")
    let slump = Math.random()*5 // expanderar spannet/range till mer önskat stora tal
    let avrund = Math.floor(slump)+ 1 // avrundning
    let space = "&nbsp;"     // symbolen //entity code för space
    space = space.repeat(avrund); // repeterar den symbolen

    for (let j = 0; j < avrund; j++) {
        console.log(" ") ;
    } 
    document.write(space); // printar vi ut "mellanrum"
} */


               //    0          1                 2                     3            4
let cityNames = ["stockholm","kiruna",    ["hej", "san" ,"ALRIK" ] ,"gothenburg","malmö"]


for (let i = 0; i < cityNames.length; i++) {
    
    console.log(i)
    console.log()
    
}

// 7)   Object

let hus = {   color :   "red"  
    , adress: "yxgatan" 
    , age : 31 
    , price : 1000000 
    , 
    // metod
    sellIt : function (price) {
        alert("the house is sold for: "+price + "  kr")
    }
}


// definera funktion
function alriksFunction(params) {
    alert(params)
}

// anropa funktionen
alriksFunction(params)


