let vip = true;

let age = 16;

if (vip == true) { // ni kan ha bara: if(vip){ pga att det ger samma svar i conditionen
    console.log("Welcome in my best VIP Customer :)");
    alert("Access granted")
}
else if (age >= 17) {
    alert("Access granted");
  } 
else {
    alert("Access denied")
} 