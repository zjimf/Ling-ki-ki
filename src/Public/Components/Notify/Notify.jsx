import React from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import NotifyMsg from "./NotifyMsg";

const Notify = ({ handleClose }) => {
  const data = [
    {
      title: "Líng-ki-ki",
      des: "又到了讓氣氛 Cool-down 的時間了，準備好了嗎？「什麼時候二加一會不等於三？ 算錯的時候！」",
      image: 1,
      time: "2024/05/18 17:10",
    },
    {
      title: "Líng-ki-ki",
      des: "你已下載Líng-ki-ki，冷支支！",
      image: 1,
      time: "2024/05/18 16:10",
    },
    {
      title: "節能提醒助手",
      des: "偵測到「冷氣A」已開啟四個小時，建議您可以關閉冷氣，讓它休息一陣子！...",
      image: 2,
      time: "2024/05/17 16:10",
    },
    {
      title: "滿意度調查",
      des: "睡得還好嗎？對於本次的智慧省電睡眠體驗感受如何呢，協助我們填寫一下滿意度問卷吧！...",
      image: 3,
      time: "2024/05/16 15:10",
    },
    {
      title: "智慧節能定位",
      des: "GPS 定位偵測您已離開住所，將在5分鐘後關閉室內所有裝置。...",
      image: 2,
      time: "2024/05/16 15:10",
    },
  ];
  return (
    <Box
      sx={{
        height: "100vh",
        width: "80vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingX: "5px",
      }}
    >
      <Box
        sx={{
          width: "80vw",
          marginY: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <Box sx={{ width: "24px", height: "24px" }} />
        <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
          最新通知
        </Typography>
        <CloseIcon onClick={handleClose} />
      </Box>
      {data.map((item) => (
        <NotifyMsg
          title={item.title}
          des={item.des}
          image={item.image}
          time={item.time}
        />
      ))}
    </Box>
  );
};

export default Notify;
