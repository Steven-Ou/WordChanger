import { Box, Button, Input } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box>
      <h1 className="change">WELCOME TO WORD COLOR CHANGER</h1>
  <div id="lock">
    <h2 id="as">Something Cool Will Happen!</h2>
    <div class="ab">
      <Input type="text" id="amount" placeholder="Enter a sentence" style={{textAlign:"center"}}></Input>
      <Button></Button>
    </div>
    <h3 style="text-decoration: underline;">Output:</h3>
    <div id="output"></div>
  </div>
      </Box>
    </div>
  );
}
