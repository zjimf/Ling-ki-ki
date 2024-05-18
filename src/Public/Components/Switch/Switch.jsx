import React from "react";
import { Box } from "@mui/material";

const Switch = ({ left, right, currentTab, setCurrentTab }) => {
  const handleSwitch = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "row", marginTop: "40px" }}>
      <Box
        sx={{
          width: "160px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: currentTab === 0 ? "5px" : "0px 5px 5px 0px",
          backgroundColor: currentTab === 0 ? "#3CB9CA" : "white",
          color: currentTab === 0 ? "white" : "black",
          fontWeight: "bold",
        }}
        onClick={() => handleSwitch(0)}
      >
        {left}
      </Box>
      <Box
        sx={{
          width: "160px",
          height: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: currentTab === 1 ? "5px 0px 0px 5px" : "5px",
          backgroundColor: currentTab === 1 ? "#3CB9CA" : "white",
          color: currentTab === 1 ? "white" : "black",
          fontWeight: "bold",
        }}
        onClick={() => handleSwitch(1)}
      >
        {right}
      </Box>
    </Box>
  );
};

export default Switch;
