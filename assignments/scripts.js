var age = 17;
var vip = false;

function CheckAccess()
{
  vip = document.getElementsByTagName("input")[0].checked;
  age = document.getElementsByTagName("input")[1].value;
  if (vip) {
      alert("Welcome in my best VIP customer :)");
  } else if (age >= 18) {
      alert("Access granted, Welcome");
  } else {
      alert("Access denied, Sorry");
  }
  document.getElementById('vipCheck').checked = 'on';
  document.getElementById('ageInput').value = 16;
}