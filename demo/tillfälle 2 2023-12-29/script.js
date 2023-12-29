// f2 är att ta upp inspectorn / devtool
// console

// 2) datatyper
//String
let x = "tjenare"; //string , sträng , String
x = "@"; //character , karaktär , char

//number
let x2 = 550; //integer, heltal  , int
x2 = -0.5; //float/double , decimaltal , f

//boolean    true kan tolkas som 1, false kan tolkas som 0
let x3 = false; // boolean , boolean , bool

//String + String = String   // konkatination , klistrar ihop
//String + number = String
//String + boolean = String

//number + number = number
//number + boolean = number //tolkar boolean som 1/0

// boolean + boolean = number // kalkylationer

/* console.log("hej" + (1 + 1 + 1 + 1)  )
console.log( 1 + 1 + 1 + 1 + "hej") */
//vänster till höger för operatorer
//P Parentess ()
//E Exponent ^
//M multiplikation *
//D Divition /
//A Addition +
//S subtraktion -

//console.log(typeof 5)

// f12 på webbläsare är inspekt
// 3) Arrayer

let z;
let foo = 5;
foo = 8;

console.log(foo);

//      index   0    , 1   , 2
let array = ["MELISSA", "ALRIK", "David"];
// denna arrayen innehåller 3 element
// längden är 3

//array[0] = 10
//array = 20

// lägg in på slutet
//array.push(true)
// lägg in på början
//array.unshift(888)

//ta bort från  slutet
//array.pop()

//ta bort från början
//array.shift()

//array.sort()
//array.reverse()
console.log(array);
console.log(array.length); //längden

document.write(array[0] + " : " + array[2]);

// 4) if satser
let height = 169;
if (height > 170) console.log("TALL!!!");
else console.log("SHORT KING!!!");
// 4.a conditions () true eller false / boolean

// == likamed är väster sidan samma som höger sidan
// === likamed och datatyper
// < mindre än
// > större än
// <= mindre än eller likamed
// >= större än eller likamed
// != inte likamed
let age = 10;
let vip = false;

// 4.b else if
//1) if satser serie 
if (age >= 18) {
    console.log("VUXEN");
} else {
    console.log("barn");
}

if (vip == true) {
    console.log("du är en kändis");
} else {
    console.log("du är PLEB");
}

// 2) vid true

if (age >= 18) {
    console.log("VUXEN");
    if (vip == true) {
        console.log("du är en kändis");
    } else {
        console.log("du är PLEB");
    }
} else {
    console.log("barn");
}

// 3 )  vid false

if (age >= 18) {
    console.log("VUXEN");
} else {
    console.log("barn");
    if (vip == true) {
        console.log("du är en kändis");
    } else {
        console.log("du är PLEB");
    }
}

if (age >= 18) {
    console.log("VUXEN");
} else if (vip == true) {
    console.log("du är en kändis");
} else {
    console.log("du är PLEB");
}



// 4.c kombinationer

if(age >= 18 && vip == true)
    console.log("YES");
else 
    console.log("NO");
