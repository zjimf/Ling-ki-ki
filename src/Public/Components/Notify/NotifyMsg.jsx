import React from "react";
import { Box, Typography } from "@mui/material";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";

const NotifyMsg = ({ title, des, image, time }) => {
  let imageTarget;
  switch (image) {
    case 1:
      imageTarget = image1;
      break;
    case 2:
      imageTarget = image2;
      break;
    case 3:
      imageTarget = image3;
      break;
    default:
      break;
  }

  return (
    <Box
      sx={{
        width: "80vw",
        height: "10vh",
        borderBottom: "1px solid #E5E5E5",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 30,
          width: 30,
        }}
        src={imageTarget}
      />
      <Box
        sx={{
          width: "80vw",
          display: "flex",
          flexDirection: "column",
          marginLeft: "10px",
        }}
      >
        <Typography
          sx={{ fontSize: "15px", fontWeight: "bold", color: "#3D928D" }}
        >
          {title}
        </Typography>
        <Typography sx={{ fontSize: "12px" }}>{des}</Typography>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#A2A2A2",
            }}
          >
            {time}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NotifyMsg;
