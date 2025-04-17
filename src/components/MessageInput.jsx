import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  return (
    <Box display="flex" gap={1}>
      <TextField
        fullWidth
        placeholder="Type a message"
        size="small"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />
      <Button variant="contained" endIcon={<SendIcon />} onClick={handleSend}>
        Send
      </Button>
    </Box>
  );
}
