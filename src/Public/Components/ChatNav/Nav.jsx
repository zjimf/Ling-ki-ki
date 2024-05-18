import React from "react";
import { Box, Typography } from "@mui/material";
import { FaAngleLeft } from "react-icons/fa6";

const Nav = ({ setActiveTab }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "13vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <FaAngleLeft size={25} onClick={() => setActiveTab("home")} />
        <Typography
          color="common.white"
          sx={{
            fontWeight: "bold",
            fontSize: "25px",
            lineHeight: "45px",
            color: "#3CB9CA",
          }}
        >
          智能小管家
        </Typography>
        <Box
          sx={{
            height: 45,
            width: 45,
          }}
        />
      </Box>
    </Box>
  );
};

export default Nav;
