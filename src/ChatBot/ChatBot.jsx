import React, { useState } from "react";
import { MessageList } from "react-chat-elements";
import { Box } from "@mui/material";
import Nav from "../Public/Components/ChatNav/Nav";
import SendBox from "./SendBox";
import "react-chat-elements/dist/main.css";
import SettingBox from "./SettingBox";

const ChatBot = ({ setActiveTab }) => {
  const [chatMessages, setChatMessages] = useState([
    {
      position: "left",
      type: "text",
      title: "智能小管家",
      text: "我是你的智能小管家！",
    },
  ]);

  return (
    <Box>
      <Nav setActiveTab={setActiveTab} />
      <Box
        sx={{
          overflow: "auto",
          height: "69vh",
          marginY: "5px",
        }}
      >
        <MessageList
          className="message-list"
          lockable={true}
          toBottomHeight={"100%"}
          dataSource={chatMessages}
        />
      </Box>
      <SettingBox
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <SendBox chatMessages={chatMessages} setChatMessages={setChatMessages} />
    </Box>
  );
};

export default ChatBot;
