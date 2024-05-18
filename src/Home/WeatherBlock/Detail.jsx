import React from "react";
import { Box, Typography } from "@mui/material";

const Detail = ({ font, value }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "20vw" }}>
      <Typography
        sx={{ color: "#808080", fontSize: "18px", marginRight: "5px" }}
      >
        {font}
      </Typography>
      <Typography sx={{ color: "#B9B9B9", fontSize: "16px" }}>
        {value}
      </Typography>
    </Box>
  );
};

export default Detail;
