import React from "react";
import { Box, Typography } from "@mui/material";
import airConditioner from "./images/1.png";
import dehumidifier from "./images/2.png";
import washingMachine from "./images/3.png";
import "../Home.css";

const Device = ({ name, where, image, setting, status }) => {
  const isOperating = status[0] === "運轉中";
  let imageToShow;
  let textStyle = {
    color: status[1],
    fontSize: "14px",
    fontWeight: "bold",
  };
  if (isOperating) {
    textStyle = {
      ...textStyle,
      animation: "blinker 3s linear infinite",
    };
  }
  switch (image) {
    case "1":
      imageToShow = airConditioner;
      break;
    case "2":
      imageToShow = dehumidifier;
      break;
    case "3":
      imageToShow = washingMachine;
      break;
    default:
      imageToShow = null;
  }

  return (
    <Box
      sx={{
        width: "42vw",
        height: "15vh",
        backgroundColor: "white",
        margin: "5px",
        borderRadius: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography sx={{ fontSize: "14px" }}>{name}</Typography>
        <Box
          component="img"
          sx={{
            height: 90,
            width: 90,
          }}
          src={imageToShow}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            color: "#AFAFAF",
            backgroundColor: "#F3F3F3",
            paddingX: "10px",
            borderRadius: "10px",
            fontSize: "14px",
          }}
        >
          {where}
        </Typography>
        <Typography
          sx={{
            fontSize: "30px",
            color: "#248086",
            fontWeight: "bold",
            marginY: "10px",
          }}
        >
          {setting}
          <span
            style={{ fontSize: "10px", color: "#7E7E7E", marginLeft: "3px" }}
          >
            度
          </span>
        </Typography>
        <Typography sx={textStyle}>{status[0]}</Typography>
      </Box>
    </Box>
  );
};

export default Device;
