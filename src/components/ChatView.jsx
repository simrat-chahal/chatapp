import React from "react";
import { Box, Typography } from "@mui/material";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";

export default function ChatView({ chat, messages, onSend }) {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      p={2}
      sx={{ backgroundColor: "aliceblue" }}
    >
      <Typography variant="h6">{chat?.name}</Typography>
      <MessageList messages={messages} />
      <MessageInput onSend={onSend} />
    </Box>
  );
}
