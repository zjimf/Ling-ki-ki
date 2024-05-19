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

          fetch("http://localhost:8000/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: msg }),
          })
            .then((response) => response.json())
            .then((data) => {
              const botMessageText = data.reply.split("\n").map((item, key) => (
                <React.Fragment key={key}>
                  {item}
                  <br />
                </React.Fragment>
              ));

              const botMessage = {
                position: "left",
                type: "text",
                title: "智能小管家",
                text: botMessageText,
              };
              setChatMessages((prevMessages) => [...prevMessages, botMessage]);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
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
