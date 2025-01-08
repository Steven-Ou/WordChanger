//Only JS method, without html css.
/*
const colors = [
    "\x1b[31m",//Red
    "\x1b[33m",//Yellow
    "\x1b[32m",//Green
    "\x1b[36m",//Cyan
    "\x1b[34m",//Blue
    "\x1b[35m",//Purple
    "\x1b[30m",//Black
    "\x1b[37m"//White
];

function printMessage(str){
    const randIndex = Math.floor(Math.random()*8);
    let output = "";
    for(let i =0; i<str.length; i++){
        for(let j =0; j<10000;j++){
            for(let c=33; c<126;c++){
                output += String.fromCharCode(c)+ "\b";
            }    
        }
        output+= colors[(randIndex +i)%8]+str[i];
    } 
    console.log(output + "\x1b[0m"); //Resets the color
}

const prompt = require('prompt-sync')();
const message = prompt("ENTER A MESSAGE! :");
printMessage(message);
*/
//Method of combining HTML CSS AND JS
const colors = [
    "red",    // Red
    "yellow", // Yellow
    "green",  // Green
    "cyan",   // Cyan
    "blue",   // Blue
    "purple", // Purple
    "black",  // Black
    "white"   // White
  ];
  
  function printMessage() {
    const str = document.getElementById("amount").value.trim(); // Get input and trim whitespace
    const outputDiv = document.getElementById("output"); // Output container
    let outputHTML = ""; // Initialize the output string
  
    if (str === "") {
      outputDiv.innerHTML = "Please enter a valid sentence.";
      return;
    }
  
    // Loop through each character of the input string
    for (let i = 0; i < str.length; i++) {
      const colorIndex = i % colors.length; // Cycle through colors
      const char = str[i]; // Current character
  
      // Append each character wrapped in a span tag with the appropriate color
      outputHTML += `<span style="color: ${colors[colorIndex]}">${char}</span>`;
    }
  
    // Display the generated HTML in the output div
    outputDiv.innerHTML = outputHTML;
  }
  
  