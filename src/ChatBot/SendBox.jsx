import React, { useState } from "react";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";

const SendBox = ({ chatMessages, setChatMessages }) => {
  const [msg, setMsg] = useState("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginY: "10px",
      }}
    >
      <TextField
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        sx={{ width: "80vw" }}
      />
      <IconButton
        onClick={(e) => {
          const newMessage = {
            position: "right",
            type: "text",
            title: "You",
            text: msg,
          };

          if (msg.trim()) {
            setChatMessages([...chatMessages, newMessage]);
            setMsg("");
          }
        }}
        sx={{ marginLeft: "10px" }}
        color="primary"
        aria-label="send message"
        size="large"
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default SendBox;
