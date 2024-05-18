import React from "react";
import { Box, Typography } from "@mui/material";
import Location from "./Location";
import Weather from "./Weather";

const WeatherBlock = () => {
  return (
    <Box
      sx={{
        margin: "10px",
        width: "90vw",
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          color: "#797979",
          marginX: "10px",
          marginBottom: "10px",
        }}
      >
        定位資訊-環境數值
      </Typography>
      <Box
        sx={{
          width: "90vw",
          backgroundColor: "white",
          borderRadius: "10px",
          marginBottom: "25px",
        }}
      >
        <Location />
        <Weather />
      </Box>
    </Box>
  );
};

export default WeatherBlock;
