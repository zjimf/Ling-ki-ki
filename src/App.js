import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./Home/Home";
import Electric from "./Electric/Electric";
import Forum from "./Forum/Forum";
import Self from "./Self/Self";
import ChatBot from "./ChatBot/ChatBot";
import BottomNav from "./Public/Components/BottomNav/BottomNav";
import Nav from "./Public/Components/Nav/Nav";

const App = () => {
  const [activeTab, setActiveTab] = useState("home");

  const isChatBotActive = activeTab === "chatBot";

  return (
    <Router>
      <Box>
        {!isChatBotActive && <Nav setActiveTab={setActiveTab} />}
        {activeTab === "home" && <Home />}
        {activeTab === "electric" && <Electric />}
        {activeTab === "forum" && <Forum />}
        {activeTab === "self" && <Self />}
        {isChatBotActive && <ChatBot setActiveTab={setActiveTab} />}
        {!isChatBotActive && (
          <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
        )}
        {!isChatBotActive && <Box sx={{ height: "8vh", width: "100vw" }} />}
      </Box>
    </Router>
  );
};

export default App;
