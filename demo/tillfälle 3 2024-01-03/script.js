// 5) loopar repeterar koder
// om conditionen är false så avslutar den loopen
// vid sant så loopare den vidare
// ni kan göra så att den loopar förevigt

// while

let count = 0;

while (count < 3) {
    //count = count + 1
    //count += 1  // ökar med 1
    //count ++      //ökar bara med 1
    console.log("while " + count);
    count += 1;
    //count = count - 1
    //count -= 1
    //count --
    //document.write("<button> HEJSAN </button>")
}

let c = 3
do{ // gör en loop fast att condition är false
    console.log("do while "+c);
    c+=1
}
while(c < 3)



//document.write('<img width="50px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4d%2FCat_November_2010-1a.jpg%2F1200px-Cat_November_2010-1a.jpg&f=1&nofb=1&ipt=d04ca8fb3b0447429248112b42238a15aeadbcfb2b840519b27d8e38e92ea2cc&ipo=images"> ')

// for loopen består avv 3 delar också
//   deklaration ;   condtion ; ändring

for (let i = 0; i < 3; i++) {
    console.log("for " + i);
}

let i = 888;
for (i = 0; i < 3; i++) {
    console.log("for " + i);
}

/* { closure / scope / encapsulation
    var x = 888;
    var x = "hejsan";
}
 */

console.log("vidare...");



//6) funktioner
// deklarera en variabel
let foo = 5

console.log(foo);

// hoisting
// anropar funktionen / kalla på funktionen / call
alriksFunction()

// definera en funktion, define
function alriksFunction () {
    let tal = 11
    let tal2 = 89
    console.log(tal + tal2)
}

console.log("hej");