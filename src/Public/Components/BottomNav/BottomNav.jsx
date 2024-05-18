import React from "react";
import { Box, Typography } from "@mui/material";
import CottageIcon from "@mui/icons-material/Cottage";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DescriptionIcon from "@mui/icons-material/Description";
import TuneIcon from "@mui/icons-material/Tune";

const BottomNav = ({ activeTab, setActiveTab }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "7vh",
        position: "fixed",
        backgroundColor: "white",
        bottom: 0,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("home")}
      >
        <CottageIcon
          sx={{
            color: activeTab === "home" ? "#287D89" : "#8A8A8A",
            fontSize: "28px",
          }}
        />
        <Typography
          sx={{
            color: activeTab === "home" ? "#287D89" : "#8A8A8A",
            fontSize: "12px",
          }}
        >
          首頁
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("electric")}
      >
        <ElectricBoltIcon
          sx={{
            color: activeTab === "electric" ? "#287D89" : "#8A8A8A",
            fontSize: "28px",
          }}
        />
        <Typography
          sx={{
            color: activeTab === "electric" ? "#287D89" : "#8A8A8A",
            fontSize: "12px",
          }}
        >
          用電
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("forum")}
      >
        <DescriptionIcon
          sx={{
            color: activeTab === "forum" ? "#287D89" : "#8A8A8A",
            fontSize: "28px",
          }}
        />
        <Typography
          sx={{
            color: activeTab === "forum" ? "#287D89" : "#8A8A8A",
            fontSize: "12px",
          }}
        >
          論壇
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => setActiveTab("self")}
      >
        <TuneIcon
          sx={{
            color: activeTab === "self" ? "#287D89" : "#8A8A8A",
            fontSize: "28px",
          }}
        />
        <Typography
          sx={{
            color: activeTab === "self" ? "#287D89" : "#8A8A8A",
            fontSize: "12px",
          }}
        >
          個人
        </Typography>
      </Box>
    </Box>
  );
};

export default BottomNav;
