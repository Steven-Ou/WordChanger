import { Box, Button, Input } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box>
      <h1 className="change">WELCOME TO WORD COLOR CHANGER</h1>
    <h2 id="as">Something Cool Will Happen!</h2>
    <div class="ab">
      <Input type="text" id="amount" placeholder="Enter a sentence" style={{textAlign:"center"}}></Input>
      <Button></Button>
    </div>
      </Box>
    </div>
  );
}
