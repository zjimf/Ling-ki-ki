import React from "react";
import { Box, Typography } from "@mui/material";
import icon from "./images/Weather.png";

const Describe = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "20px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 90,
          width: 90,
        }}
        src={icon}
      />
      <Typography
        sx={{ fontSize: "18px", color: "#297984", marginTop: "10px" }}
      >
        多雲時晴
      </Typography>
    </Box>
  );
};

export default Describe;
