import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Box,
} from "@mui/material";

export default function ChatItem({ chat, selected, onSelect }) {
  return (
    <ListItem
      selected={selected}
      onClick={onSelect}
      sx={{
        borderRadius: "10px",
        margin: "4px",
        cursor: "pointer",
        bgcolor: selected ? "#e3f2fd" : "transparent",
        "&:hover": { bgcolor: "#eee" },
      }}
    >
      <ListItemAvatar>
        <Avatar>{chat.avatar}</Avatar>
      </ListItemAvatar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "anchor-center",
          }}
        >
          <ListItemText
            primary={chat.name}
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "140%",
              },
            }}
          />
          <ListItemText
            primary={"Yesterday"}
            sx={{
              "& .MuiListItemText-primary": {
                fontSize: "0.8em",
                textAlign: "end",
              },
            }}
          />
        </Box>
        <ListItemText
          primary={chat.lastMessage}
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: 260,
          }}
        />
      </Box>
    </ListItem>
  );
}
