import { Box, Button, Input } from "@mui/material";

export default function Home() {
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
          <Button onClick={printMessage()}>Submit</Button>
        </div>
        <h3 className="c">Output:</h3>
        <div id="output"></div>
        <script src="script.js"></script>
      </Box>
    </div>
  );
}

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

function printMessage(){
    const str = document.getElementById("amount").ariaValueMax.trim();
    const op = document.getElementById("output");
    let opH =""; 
  
    if(str == ""){
      op.innerHTML = "Please enter a valid sentence:"; 
      return;
    }
    for(let i=0; i< str.length; i++){
      const cI = i%colors.length;
      const char = str[i];
    }
}
