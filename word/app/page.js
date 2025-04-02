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
        <div class="ab">
          <Input type="text" id="amount" placeholder="Enter a sentence" style={{textAlign:"center"}}></Input>
          <Button onClick={}>Submit</Button>
        </div>
      </Box>
    </div>
  );
}
