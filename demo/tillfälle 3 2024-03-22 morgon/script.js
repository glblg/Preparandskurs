// 5) loopar

// när condition är sant så repeterar den


var count = 0

while (count < 3) {
    console.log("loop while + " + count)
    count = count + 1   // ökar med 1
    //  count += 1          // öka med 1
    //  count ++            // ökar med bara 1
}


var count = 3
//count > 0
while (count > 0) {
    console.log("loop while - " + count)
    count = count - 1   // minska med 1
    //  count -= 1      // minska med 1
    //  count -+        // minskar med bara 1
}

var count = 0
//count > 0

do{
    console.log("loop do while " + count)
    count = count + 1  
}
while (count < 3) 


// startkod    ;  regel      ; ändring  
// deklaration ;  condition ;  ökar
for (  var count = 0 ;  count < 3 ; count++ ) {
    console.log("for loop  " + count)
}


let queue = ["Christine", "Sebastian","Alrik","Anton","Ilir","Matilda"]


for(let x of queue){
    console.log(x)
}




console.log("vidare...")
//document.write(queue)

function displayQueue() {
    // index         0             1          2      3      4      5

    let namn = document.getElementById("nameInput").value
    queue.push(namn)

    let index = 0

    while (index < queue.length){
        document.write("<h1 style='background-color:cyan;'>"+queue[index] + " är på köplats: " + (index + 1) + "</h1><br>")
        index++
    }

}


// 6) funktioner

alert("hello")          // funktion
console.log("hello");   // metod
//document.write("hello"); // metod

//              parameter/parametrar = beter sig som variable
function addition( tal1 , tal2 ){ // definera fuktionen addition
    console.log("summan är : "+(tal1 + tal2));
    alert("summan är : "+(tal1+ tal2))
    return "hejsan!!"  // return avslutar också funktionen/metoden
}

//console.log(tal1) parametera är fast i funktionen/metoden

addition( 1,1 ) //anropa fuktionen / kalla / call 


