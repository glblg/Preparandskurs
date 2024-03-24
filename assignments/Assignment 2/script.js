let outputDOM = document.getElementById('output').innerHTML;

let count = 0;
while (count < 11) {
  count = count + 1;

  if (count % 2 == 0) {
    console.log("X")
  } else console.log("O")


  if (count == 5) {
    console.log("Q");
  }
}
