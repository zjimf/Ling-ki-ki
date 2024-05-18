import React from "react";
import { Box, Typography } from "@mui/material";
import Device from "./Device";

const DeviceBlock = () => {
  const name = [
    "變頻冷氣機",
    "除濕機",
    "變頻冷氣機",
    "變頻冷氣機",
    "除濕機",
    "除濕機",
  ];
  const where = ["客廳", "廚房", "陽台", "主臥室", "次臥室", "浴室"];
  const image = ["1", "2", "1", "1", "2", "2"];
  const setting = ["23", "25", "16", "24", "20", "18"];
  const status = [
    ["運轉中", "#3CBF59"],
    ["待機中", "#6FBBC0"],
    ["運轉中", "#3CBF59"],
    ["已關機", "#E52222"],
    ["已關機", "#E52222"],
    ["運轉中", "#3CBF59"],
  ];
  return (
    <Box
      sx={{
        width: "90vw",
      }}
    >
      <Typography
        sx={{
          fontSize: "18px",
          color: "#797979",
          marginX: "10px",
          marginY: "3px",
        }}
      >
        家庭裝置
      </Typography>
      <Box
        sx={{
          width: "90vw",
          borderRadius: "10px",
          marginBottom: "25px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {name.map((item, index) => (
          <Device
            key={index}
            name={item}
            where={where[index]}
            image={image[index]}
            setting={setting[index]}
            status={status[index]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default DeviceBlock;
