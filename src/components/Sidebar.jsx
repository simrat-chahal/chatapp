import React from "react";
import { Box, List } from "@mui/material";
import ChatItem from "./ChatItem";

export default function Sidebar({ chats, selectedChatId, setSelectedChatId }) {
  return (
    <Box
      width="360px"
      bgcolor="#f9f9f9"
      borderRight="1px solid #ddd"
      sx={{
        overflowY: "auto",
        overflowX: "hidden", // 🔥 prevent horizontal scroll
        maxHeight: "100vh", // or use a specific height like "600px"
      }}
    >
      <List disablePadding>
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            chat={chat}
            selected={chat.id === selectedChatId}
            onSelect={() => setSelectedChatId(chat.id)}
          />
        ))}
      </List>
    </Box>
  );
}
