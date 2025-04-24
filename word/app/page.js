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
      const color = colors[Math.floor(Math.random() * colors.length)];
      return (
        <span key={i} style={{ 
          color: color, 
          transition:"color 0.5s ease",
          fontSize:"24px",
          fontWeight:"bold",
          }}
        >
          {char}
        </span>
      );
    });
    setop(colored);
};
  
  return (
    //Frontend Section:
    <div className="mx-auto flex max-w-sm items-center gap-x-4 rounded-3xl bg-green-200 
    p-6 shadow-lg border-6 dark:shadow-none animate-borderColor animate-backgroundColor">

      <Box id = "lock" className="flex flex-col gap-y-4 text-colors-white-500 dark:text-white-400
        rounded-3xl p-6 outline-4 
        dark:outline-4 border-4 animate-borderColor
        animate-backgroundColor
      ">
        <h1 className="change animate-borderColor border-4 rounded-3xl flex flex-col gap-y-4 
        text-colors-white-500 dark:text-white-400 animate-borderColor
        animate-backgroundColor outline-4 font-bold text-2xl
        ">
          WELCOME TO WORD COLOR CHANGER
        </h1>
        <h2 id="as" className="text-gray-800 dark:text-gray-500 font-bold">
          Something Cool Will Happen!
        </h2>
        <div className="ab">
          <Input 
          type="text" 
          id="amount" 
          placeholder="Enter a sentence" 
          autoComplete="off"
          className="transition-all duration-300 ease-in-out border-2"
          style={{textAlign:"center"}} 
          value={inP} 
          onChange={(e) => setinP(e.target.value)}
          sx={{
            '::placeholder':{
              color:'green-600',
              opacity:1,
            },
            input:{
              textAlign:"center",
              color:"black",
            }
          }}
          inputProps={{
            style: {
              textAlign: "center",
              color: "black",
              backgroundColor: "green-100",
              borderRadius: "5px",
              padding: "10px",
            }
          }}
          >
          </Input>
          <Button onClick={printMessage} 
          className="bg-blue-500 hover:bg-blue-700 text-white
           font-bold py-2 px-4 rounded text-2xl
           transition duration-300 ease-in-out"
           variant="text"
           disableElevation
          >
          Submit</Button>
          
        </div>
        <Box id="output"  
        className="mx-auto flex-col max-w-sm items-center
        gap-x-4 rounded-xl p-6 shadow-lg outline
        outline-black/5 dark:shadow-lg dark:outline-white/10
        text-gray-800 dark:text-gray-200
        ">
          <h3 className=" font-bold text-2xl underline decoration-dashed">OUTPUT:</h3>
          {op}
        </Box>
      </Box>
    </div>
  );
}
