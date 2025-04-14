'use client';
import { useState } from "react";
import { Box, Button, Input } from "@mui/material";

export default function Home() {
  //Backend Section:
  const [inP,setinP] = useState("");
  const [op,setop] = useState("");
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
  const printMessage = () => {
    const str = inP.trim(); 
        
    if(str === ""){
      setop = "Please enter a valid sentence:"; 
      return;
    }
    const colored = Array.from(str).map((char, i) => {
      const color = colors[i % colors.length];
      return `<span style ="color:${color}">${str[i]}</span>`;
    }).join("");
    setop(colored);
};
  
  return (
    //Frontend Section:
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white 
    p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 
    dark:shadow-none dark:outline-white/10
    ">
      <Box id = "lock" className="flex flex-col gap-y-4 text-colors-white-500 dark:text-white-400">
        <h1 className="change">WELCOME TO WORD COLOR CHANGER</h1>
        <br></br>
        <h2 id="as" className="text-gray-800 dark:text-gray-200">Something Cool Will Happen!</h2>
        <br></br>
        <br></br>
        <div className="ab">
          <Input 
          type="text" 
          id="amount" 
          className=""
          placeholder="Enter a sentence" 
          style={{textAlign:"center"}} 
          value={inP} 
          onChange={(e) => setinP(e.target.value)}>
          </Input>
          <Button onClick={printMessage}>Submit</Button>
        </div>
        <h3 className="c">Output:</h3>
        <div id="output" dangerouslySetInnerHTML={{__html:op}}></div>
        <script src="script.js"></script>
      </Box>
    </div>
  );
}
