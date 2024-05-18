import React from "react";
import { Box, Typography } from "@mui/material";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
const ForumPage = ({ title, des, like, msg, save, image }) => {
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
    case 4:
      imageTarget = image4;
      break;
    case 5:
      imageTarget = image5;
      break;
    default:
      imageTarget = image1;
  }
  return (
    <Box
      sx={{
        width: "85vw",
        height: "14vh",
        backgroundColor: "white",
        marginTop: "20px",
        borderRadius: "10px",
        padding: "12px 15px 12px 15px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            width: "65vw",
            height: "15vh",
          }}
        >
          <Typography sx={{ color: "#777777", fontSize: "9px" }}>
            23 HOURS AGO
          </Typography>
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            {title}
          </Typography>
          <Typography sx={{ fontWeight: "#777777", fontSize: "12px" }}>
            {des}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FavoriteBorderIcon sx={{ fontSize: "15px", color: "#F58686" }} />
              <Typography sx={{ fontSize: "11px", marginLeft: "3px" }}>
                {like}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <CommentIcon sx={{ fontSize: "15px", color: "#00A1F5" }} />
              <Typography sx={{ fontSize: "11px", marginLeft: "3px" }}>
                {msg}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginLeft: "10px",
              }}
            >
              <TurnedInIcon sx={{ fontSize: "15px", color: "gray" }} />
              <Typography sx={{ fontSize: "11px", marginLeft: "3px" }}>
                {save}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            width: "35vw",
            height: "15vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 90,
              width: 90,
            }}
            src={imageTarget}
          ></Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForumPage;
