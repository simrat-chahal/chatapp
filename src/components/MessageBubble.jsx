// import React from "react";
// import { Box } from "@mui/material";

// export default function MessageBubble({ text, mine }) {
//   return (
//     <Box
//       alignSelf={mine ? "flex-end" : "flex-start"}
//       bgcolor={mine ? "#1976d2" : "#f1f1f1"}
//       color={mine ? "#fff" : "#000"}
//       px={2}
//       py={1}
//       borderRadius={3}
//       maxWidth="70%"
//       boxShadow={1}
//       sx={{
//         borderBottomRightRadius: mine ? 0 : 3,
//         borderBottomLeftRadius: mine ? 3 : 0,
//       }}
//     >
//       {text}
//     </Box>
//   );
// }

import React from "react";
import { Box, Typography } from "@mui/material";

export default function MessageBubble({ text, time, mine }) {
  return (
    <Box
      display="flex"
      justifyContent={mine ? "flex-end" : "flex-start"}
      mb={1}
    >
      <Box
        sx={{
          maxWidth: "70%",
          bgcolor: mine ? "#1976d2" : "#f1f1f1",
          color: mine ? "#fff" : "#000",
          px: 2,
          py: 1,
          borderRadius: 2,
          boxShadow: 1,
          borderBottomRightRadius: mine ? 0 : 2,
          borderBottomLeftRadius: mine ? 2 : 0,
        }}
      >
        <Typography variant="body1">{text}</Typography>
        <Typography
          variant="caption"
          sx={{
            mt: 0.5,
            display: "block",
            textAlign: mine ? "right" : "left",
            opacity: 0.7,
          }}
        >
          {new Date(time).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </Typography>
      </Box>
    </Box>
  );
}
