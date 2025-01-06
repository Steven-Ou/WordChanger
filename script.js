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