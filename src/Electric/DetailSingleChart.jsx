import React from "react";
import { Box } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

const DetailSingleChart = ({ width, percent, name }) => {
  const [open, setOpen] = React.useState(false);

  const handleTooltip = () => {
    setOpen(!open);
  };

  return (
    <Box
      onClick={handleTooltip}
      sx={{ width: "250px", height: "20px", position: "relative" }}
    >
      {name}
      <Box
        sx={{
          width: "250px",
          height: "20px",
          backgroundColor: "#D9D9D9",
          position: "absolute",
        }}
      />
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltip}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={`${percent}%`}
        placement="right"
      >
        <Box
          sx={{
            width: width,
            height: "20px",
            backgroundColor: "#BDA7E2",
            borderRadius: "0 7px 7px 0",
            position: "absolute",
          }}
        />
      </Tooltip>
    </Box>
  );
};

export default DetailSingleChart;
