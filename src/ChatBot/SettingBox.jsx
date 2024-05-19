import React, { useState } from "react";
import { Box } from "@mui/material";
import setting1 from "./images/setting1.png";
import setting2 from "./images/setting2.png";
import { Dialog } from "@mui/material";
import Improve from "./Improve";

const SettingBox = ({ chatMessages, setChatMessages }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleTextSending = (text) => {
    const newMessage = {
      position: "right",
      type: "text",
      title: "You",
      text: text,
    };
    setChatMessages([...chatMessages, newMessage]);

    fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: text }),
    })
      .then((response) => response.json())
      .then((data) => {
        const formattedReply = data.reply.replace(/\./g, "<br/>");
        const botMessage = {
          position: "left",
          type: "text",
          title: "智能小管家",
          text: formattedReply,
        };
        setChatMessages((prevMessages) => [...prevMessages, botMessage]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Dialog open={open} onClose={handleClose}>
        <Improve setOpen={setOpen} />
      </Dialog>

      <Box
        component="img"
        sx={{
          height: 70,
          width: 65,
        }}
        src={setting1}
        onClick={() => {
          handleTextSending("用電分析");
          setOpen(true);
        }}
      />
      <Box
        component="img"
        sx={{
          height: 70,
          width: 65,
        }}
        src={setting2}
        onClick={() => handleTextSending("切換模式")}
      />
    </Box>
  );
};

export default SettingBox;
