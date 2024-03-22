/*// 5) loopar
 if (condition) {  

} 
 
var count = 0
while ( count < 3 ){ 
    console.log("while loop + " + count);
    count = count + 1  // ökar med 1
    // count += 1      // ökar med 1
    // count ++        // ökar bara med 1 
    break;
}

 var count = 3
while ( count > 0 ){ 
    console.log("while loop - " + count);
    count = count - 1  // minska med 1
    // count -= 1      // minska med 1
    // count --        // minska bara med 1 
}
 

var count = 0
do{ 
    console.log("do while loop + " + count);
    count = count + 1  // ökar med 1
    // count += 1      // ökar med 1
    // count ++        // ökar bara med 1 
}
while ( count < 3 )


//    deklaration ;    condition ;    tilldelning
for (var count = 0;   count < 3;  count = count + 1  ){ 
    console.log("for loop + " + count);
      // ökar med 1
    // count += 1      // ökar med 1
    // count ++        // ökar bara med 1 
}


console.log("vidare...");

//  index      0     1         2                3
let queue = ["Anna","Henrik","Elin","Ulf","Carl Ludvig Gustav","Alrik"]
let i = 0
while( i < queue.length ){
    document.write("<h1>"+queue[i]+ " är på köplats: "+ i +"</h1><br>")
    i++
}


// (6)  funktion

alert(123)        // funktion
console.log(123)  // metod
*/

let queue = ["Anna","Henrik","Elin","Ulf","Carl Ludvig Gustav","Alrik"]


//       (parameter)
function addition( tal1 , tal2 ){ //definera funktionen addition 
    let summa = tal1+tal2
    console.log("summa:"+summa);
    return summa // avslutar funktionen / metoden
    console.log("summa:"+summa);
} 

console.log(123,"hej",true , [1,5,8,"Alrik"])

addition() // anropa/ kalla / call funktionen


