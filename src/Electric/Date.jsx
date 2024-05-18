import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Date = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "20px",
        width: "80%",
      }}
    >
      <ArrowBackIosNewIcon sx={{ color: "#777777" }} />
      <Typography
        sx={{
          color: "#777777",
          fontWeight: "bold",
          fontSize: "23px",
          lineHeight: "20px",
        }}
      >
        113年 5-6月
      </Typography>
      <ArrowForwardIosIcon sx={{ color: "#777777" }} />
    </Box>
  );
};

export default Date;
