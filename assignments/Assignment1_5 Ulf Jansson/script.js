document.getElementById("enterBtn").addEventListener("click", function () {});



document.getElementById("enterBtn").addEventListener("click", function () {

  var age = parseInt(document.getElementById("age1").value);
  console.log(age);
  var vip = document.getElementById("vip").checked;
  console.log(vip);
  if (vip) {
    alert("Welcome in my best VIP costomer");
    console.log("V.I.P Access");
  } else {
    if (age >= 18) {
      let granted = "Access granted";
      alert(granted);
  
      console.log("Välkommen, betala 400:- :)");
    } else {
      let denied = "acces denied";
      alert(denied);
      console.log("access denied, Du bör gå hem till mamma");
    }
  }
});




// jag får det inte riktigt att lira så hoppas på konstruktiv feedback