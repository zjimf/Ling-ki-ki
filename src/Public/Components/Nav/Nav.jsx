import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Robot from "./Robot.png";
import Bell from "./Bell.png";
import { Dialog } from "@mui/material";
import Notify from "../Notify/Notify";

const Nav = ({ setActiveTab }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <Notify handleClose={handleClose} />
      </Dialog>

      <Box
        sx={{
          width: "100vw",
          height: "13vh",
          backgroundColor: "#3CB9CA",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItem: "center",
            padding: "20px",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 45,
              width: 45,
              cursor: "pointer",
            }}
            src={Robot}
            onClick={() => {
              setActiveTab("chatBot");
            }}
          />
          <Typography
            color="common.white"
            sx={{ fontWeight: "bold", fontSize: "25px", lineHeight: "45px" }}
          >
            HITACHI
          </Typography>
          <Box
            component="img"
            sx={{
              height: 45,
              width: 45,
            }}
            src={Bell}
            onClick={handleClickOpen}
          />
        </Box>
      </Box>
    </>
  );
};

export default Nav;
