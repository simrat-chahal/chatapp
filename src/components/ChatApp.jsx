import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ChatView from "./ChatView";
import { Box } from "@mui/material";

export default function ChatApp() {
  const [chats] = useState([
    {
      id: 1,
      name: "Alice",
      avatar: "A",
      lastMessage: "Hey, are we still on for tonight?",
    },
    {
      id: 2,
      name: "Bob",
      avatar: "B",
      lastMessage: "I'll send you the file in a bit.",
    },
    {
      id: 3,
      name: "Charlie",
      avatar: "C",
      lastMessage: "Just got back from the gym!",
    },
    {
      id: 4,
      name: "David",
      avatar: "D",
      lastMessage: "Meeting was longer than expected.",
    },
    {
      id: 5,
      name: "Eva",
      avatar: "E",
      lastMessage: "Loved the playlist you shared!",
    },
    {
      id: 6,
      name: "Frank",
      avatar: "F",
      lastMessage: "Can you check the report again?",
    },
    {
      id: 7,
      name: "Grace",
      avatar: "G",
      lastMessage: "Missed your call earlier.",
    },
    {
      id: 8,
      name: "Hannah",
      avatar: "H",
      lastMessage: "Coffee tomorrow morning?",
    },
    {
      id: 9,
      name: "Ian",
      avatar: "I",
      lastMessage: "Finally beat that level!",
    },
    {
      id: 10,
      name: "Julia",
      avatar: "J",
      lastMessage: "Let's catch up this weekend.",
    },
    {
      id: 11,
      name: "Kevin",
      avatar: "K",
      lastMessage: "Flight got delayed again.",
    },
    {
      id: 12,
      name: "Luna",
      avatar: "L",
      lastMessage: "Can't stop thinking about that movie.",
    },
    {
      id: 13,
      name: "Mike",
      avatar: "M",
      lastMessage: "Lunch at 1 pm works for me.",
    },
    {
      id: 14,
      name: "Nina",
      avatar: "N",
      lastMessage: "The presentation went well!",
    },
    { id: 15, name: "Oscar", avatar: "O", lastMessage: "On my way now." },
    {
      id: 16,
      name: "Paula",
      avatar: "P",
      lastMessage: "Need help with the design mockup.",
    },
    {
      id: 17,
      name: "Quinn",
      avatar: "Q",
      lastMessage: "Sent you the latest draft.",
    },
    {
      id: 18,
      name: "Ryan",
      avatar: "R",
      lastMessage: "Can't talk now, call you later.",
    },
    {
      id: 19,
      name: "Sophie",
      avatar: "S",
      lastMessage: "You always know what to say 😊",
    },
    { id: 20, name: "Tom", avatar: "T", lastMessage: "Game night was epic!" },
  ]);

  const [selectedChatId, setSelectedChatId] = useState(1);
  const [messages, setMessages] = useState([
    { chatId: 1, text: "Hey Alice!", time: "2025-04-16T14:45:00Z", mine: true },
    { chatId: 1, text: "Hello!", time: "2025-04-16T14:50:00Z", mine: false },
    { chatId: 1, text: "Hi", time: "2025-04-16T14:55:00Z", mine: false },
    { chatId: 1, text: "Jem", time: "2025-04-16T14:59:00Z", mine: false },
  ]);

  const handleSend = (text) => {
    setMessages((prev) => [
      ...prev,
      { chatId: selectedChatId, text, mine: true },
    ]);
  };

  return (
    <Box
      display="flex"
      height="90vh"
      sx={{ borderRadius: "25px", overflow: "hidden" }}
    >
      <Sidebar
        chats={chats}
        selectedChatId={selectedChatId}
        setSelectedChatId={setSelectedChatId}
      />
      <ChatView
        chat={chats.find((c) => c.id === selectedChatId)}
        messages={messages.filter((m) => m.chatId === selectedChatId)}
        onSend={handleSend}
      />
    </Box>
  );
}
