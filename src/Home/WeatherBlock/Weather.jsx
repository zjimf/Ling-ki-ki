import React from "react";
import { Box } from "@mui/material";
import Describe from "./Describe";
import Detail from "./Detail";

const Weather = () => {
  const font = ["溫度", "濕度", "PM2.5", "降雨機率"];
  const value = ["23°C", "80%", "13μg/m3", "5%"];

  return (
    <Box
      sx={{
        padding: "0px 25px 20px 25px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Describe />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItem: "center",
          justifyContent: "center",
        }}
      >
        {font.map((item, index) => (
          <Detail key={index} font={item} value={value[index]} />
        ))}
      </Box>
    </Box>
  );
};

export default Weather;
