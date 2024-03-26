/*
jag han inte med att skriva mer ikväll, men jag gav det ett gott försök :D */


function charRemove (inputText)
{
    if (typeof inputText !== 'string' || inputText.length < 3)
    {
        console.log("input är inte giltig, eller för kort");
        return;
    }
    const thirdChar = inputText.charAt(2);
    console.log ( "tredje bokstaven är: ", thirdChar);

}