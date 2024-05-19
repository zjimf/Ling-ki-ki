import React from "react";
import { Box } from "@mui/material";
import WeatherBlock from "./WeatherBlock/WeatherBlock";
import DeviceBlock from "./Device/DeviceBlock";
const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <WeatherBlock />
        <DeviceBlock />
      </Box>
    </Box>
  );
};

export default Home;
