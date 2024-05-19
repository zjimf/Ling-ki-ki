import React from "react";
import { Box, Typography } from "@mui/material";
import location from "./images/location.png";
const Location = () => {
  return (
    <Box
      sx={{
        marginX: "20px",
        display: "flex",
        flexDirection: "row",
        paddingY: "10px",
      }}
    >
      <Box component="img" width={45} height={45} src={location} />
      <Typography
        sx={{
          fontSize: "25px",
          color: "#000000",
          marginY: "5px",
          marginX: "10px",
        }}
      >
        台北市
      </Typography>
      <Typography sx={{ fontSize: "25px", color: "#A7CEC7", marginY: "5px" }}>
        大安區
      </Typography>
    </Box>
  );
};

export default Location;
