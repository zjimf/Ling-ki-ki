import React from "react";
import { Box } from "@mui/material";
import setting1 from "./images/setting1.png";
import setting2 from "./images/setting2.png";
const SettingBox = ({ chatMessages, setChatMessages }) => {
  const handleTextSending = (text) => {
    const newMessage = {
      position: "right",
      type: "text",
      title: "You",
      text: text,
    };
    setChatMessages([...chatMessages, newMessage]);
  };

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        alignItem: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 65,
          width: 65,
        }}
        src={setting1}
        onClick={(e) => handleTextSending("用電分析")}
      />
      <Box
        component="img"
        sx={{
          height: 65,
          width: 65,
        }}
        src={setting2}
        onClick={(e) => handleTextSending("切換模式")}
      />
    </Box>
  );
};

export default SettingBox;
