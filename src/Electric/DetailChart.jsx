import React from "react";
import { Box, Typography } from "@mui/material";
import DetailSingleChart from "./DetailSingleChart";
const DetailChart = () => {
  const data = [
    { name: "變頻冷氣機 A1", value: 52.5, percent: 21 },
    { name: "變頻冷氣機 A2", value: 17.5, percent: 7 },
    { name: "除濕機 C1", value: 38.5, percent: 8 },
    { name: "空氣清淨機 B1", value: 100, percent: 40 },
    { name: "變頻冷氣機 A3", value: 19.2, percent: 4 },
    { name: "空氣清淨機 B2", value: 81.3, percent: 17 },
  ];
  return (
    <Box
      sx={{
        width: "90vw",
        height: "40vh",
        paddingY: "20px",
        backgroundColor: "white",
        marginTop: "10px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Typography
        sx={{
          width: "90vw",
          textAlign: "center",
          color: "#747474",
        }}
      >
        裝置耗電圖
      </Typography>
      {data.map((item, index) => (
        <DetailSingleChart
          key={index}
          width={item.value}
          name={item.name}
          percent={item.percent}
        />
      ))}
    </Box>
  );
};

export default DetailChart;
