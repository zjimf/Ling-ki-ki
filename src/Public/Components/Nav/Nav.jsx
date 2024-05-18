import React from "react";
import { Box, Typography } from "@mui/material";
import Robot from "./Robot.png";
import Bell from "./Bell.png";

const Nav = ({ setActiveTab }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "13vh",
        backgroundColor: "#3CB9CA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItem: "center",
          padding: "20px",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 45,
            width: 45,
            cursor: "pointer",
          }}
          src={Robot}
          onClick={() => {
            setActiveTab("chatBot");
          }}
        />
        <Typography
          color="common.white"
          sx={{ fontWeight: "bold", fontSize: "25px", lineHeight: "45px" }}
        >
          HITACHI
        </Typography>
        <Box
          component="img"
          sx={{
            height: 45,
            width: 45,
          }}
          src={Bell}
        />
      </Box>
    </Box>
  );
};

export default Nav;
