import React from "react";
import { Box } from "@mui/material";
import DetailSingleChart from "./DetailSingleChart";
const DetailChart = () => {
  const data = [
    { name: "冷氣1", value: 52.5, percent: 21 },
    { name: "冷氣2", value: 17.5, percent: 7 },
    { name: "冷氣3", value: 38.5, percent: 8 },
    { name: "除濕機1", value: 100, percent: 40 },
    { name: "除濕機2", value: 19.2, percent: 4 },
    { name: "除濕機3", value: 81.3, percent: 17 },
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
