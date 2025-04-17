import React from "react";
import { Box } from "@mui/material";
import MessageBubble from "./MessageBubble";

export default function MessageList({ messages }) {
  return (
    <Box
      flex={1}
      overflow="auto"
      display="flex"
      flexDirection="column"
      gap={1}
      my={2}
    >
      {messages.map((msg, i) => (
        <MessageBubble
          key={i}
          text={msg.text}
          time={msg.time}
          mine={msg.mine}
        />
      ))}
    </Box>
  );
}
