/*
jag han inte med att skriva mer ikväll, men jag gav det ett gott försök :D */

function charRemove(inputText) {
    if (typeof inputText !== 'string' || inputText.length < 3) {
        console.log('input är inte giltig, eller för kort');
        return;
    }
    const thirdChar = inputText.charAt(2);
    console.log('tredje bokstaven är: ', thirdChar);
}

function alriksCharRemove(filterChar, text) {
    let filteredText = '';
    if (typeof filterChar == 'string' && typeof text == 'string')
        for (let i = 0; i < text.length; i++) {
            console.log(i, text.charAt(i));
            if (text.charAt(i) == filterChar) console.log('character on index ' + i + ' is the same as the filtered character');
            else filteredText += text.charAt(i);
        }
    console.log(filteredText);
    document.getElementById('outputText').innerText = filteredText;
}

function randomCatDeath() {
    //let array = [ 5 , "hej" , true ]
    let cat = {
        alive:  Math.random() > 0.5,
        name: 'Gustav',
    };

  //cat.alive = Math.random() > 0.5

    //if(Math.round(Math.random() ) == 0 )
/*  if(Math.random() > 0.5 )
        cat.alive = true
    else 
        cat.alive = false */
      

    alert('cats name is: ' + cat.name +" and its alive " + cat.alive );
}
