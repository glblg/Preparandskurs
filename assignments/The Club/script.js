// ålder om ålder >= 18  men vip om det är true så skippar vi
// om vip inte sant så fråga åldern

let vip = false;

let age = 17;
if (vip) 
    alert("welcome in my best customer :)");
else {
    alert("you are a regular customer!!");
    if (age >= 18)
        alert("access granted");
    else
        alert("access denied");
}

//let 18 = true
