const cat ={alive:true,namn:"Gustav"};
function myFunction(){
 cat.alive = (Math.random()* 10 + 1 > 5);

    if (cat.alive) {
      alert("The cats name is " + cat.namn +" and is alive");
    }
    else 
    {
      alert("The cats name is "+ cat.namn +" and is dead");
    }
}