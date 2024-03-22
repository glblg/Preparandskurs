

function chriss(){


  let vipvalue = document.getElementById("vip").checked;
  let age = document.getElementById("age");
  let agevalue = age.value
  

  if (vipvalue == true) {
  alert("Welcome in my best VIP customer :)");
} else if (agevalue >= 18) {
  alert("Access granted");
} else {
  alert("Access denied");
}
if (age >=18){
    alert(true)
}
}
