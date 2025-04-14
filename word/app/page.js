'use client';
import { useState } from "react";
import { Box, Button, Input } from "@mui/material";

export default function Home() {
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
    const str = inP.value.trim(); 
        
    if(str === ""){
      setop = "Please enter a valid sentence:"; 
      return;
    }
    const colored = Array.from(str).map((char, index) => {
      const color = colors[i % colors.length];
      colored += `<span style ="color:${color}">${str[i]}</span>`;
    }

    op.innerHTML = colored; 
  
};
  
  return (
    <div>
      <Box id = "lock">
        <h1 className="change">WELCOME TO WORD COLOR CHANGER</h1>
        <br></br>
        <h2 id="as">Something Cool Will Happen!</h2>
        <br></br>
        <br></br>
        <div className="ab">
          <Input type="text" id="amount" placeholder="Enter a sentence" style={{textAlign:"center"}}></Input>
          <Button onClick={printMessage}>Submit</Button>
        </div>
        <h3 className="c">Output:</h3>
        <div id="output"></div>
        <script src="script.js"></script>
      </Box>
    </div>
  );
}
