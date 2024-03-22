let vip=true;

let age=17;

if (vip==true) {
    console.log ("Welcome in my best VIP customer");
}
else { 
    age=prompt("enter your age");
    if (age>=18){
        alert("access granted"); 
    }
        else {
            alert ("access denied");
        }
}