// 7) Object & metoder

let foo = 3000000;
foo = 5000000;

// index       0             1           2
let array = [3000000, 'stenyxegatan 5', true]
array[0] = 5000000
array[3] = 'red'

// properties  key value pair (key:value)
let house = { price: 3000000, adress: 'stenyxegatan 5', sold: true }
house.price = 5000000
house.color = 'red'

console.log(foo)
console.log(array)
console.log(house)

let user = {
    username: 'Timearchitect',
    password: 'abc123!',
    lastLogin: 'Mon Mar 25 2024 10:26:30 GMT+0100 (Central European Standard Time)',
    alriksLog: function (meddelande) {
        console.log(meddelande)
    },
}

let ikeaShoppingList = ['billy bokhylla', 'köksbord', 'grytunderlag', 'matta', 'korv']
// scope/ closure
//Math.PI samma
const PI = 3.141592653589793


{
    var x = "5"
    var x = "10"
    {
        console.log(x)
    }
}
console.log(x)




//block scoped varables
{
    let y = 5;
    //let y = 10
    {
        console.log(y)
    }
    console.log(y)
}
let y = 'hej'
console.log(y)

function multiplication(tal1, tal2) {
    let produkt = tal1 * tal2
    if (typeof tal1 == 'number' && typeof tal2 == 'number') {
        console.log('det är nummer och produkten är:' + produkt);
    }
}


// semikolon är till för att separera commandon på en rad, och i parentesser() kan bara ha en rad
for( let i = 0;  i< 5  ; i++  ){
    
}