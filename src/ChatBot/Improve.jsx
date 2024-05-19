import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import CircularProgress from "@mui/material/CircularProgress";

const Improve = ({ setOpen }) => {
  const [device, setDevice] = useState("A1 變頻冷氣機");
  const [isLoading, setIsLoading] = useState(true);
  const [hour, setHour] = React.useState(4);
  const electricValue = sessionStorage.getItem("electricValue") || null;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  const handleHourChange = (event) => {
    setHour(event.target.value);
  };

  const handleChange = (event) => {
    setDevice(event.target.value);
  };

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "80vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflowX: "hidden",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: "80vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <FormControl sx={{ width: "270px", margin: "15px" }}>
        <InputLabel id="demo-simple-select-label">裝置</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={device}
          label="裝置"
          onChange={handleChange}
        >
          <MenuItem value={"A1 變頻冷氣機"}>A1 變頻冷氣機</MenuItem>
          <MenuItem value={"A2 變頻冷氣機"}>A2 變頻冷氣機</MenuItem>
          <MenuItem value={"A3 變頻冷氣機"}>A3 變頻冷氣機</MenuItem>
        </Select>
      </FormControl>
      <Box sx={{ width: "80vw" }}>
        <Typography sx={{ color: "red", fontWeight: "bold" }}>
          發現問題
        </Typography>
        <Typography sx={{ color: "#767272" }}>
          根據過往的使用模式，發現A1變頻冷氣機在深夜期間往往會持續運轉過長，從而導致電費上升。
        </Typography>
        <br />
        <Typography sx={{ color: "blue", fontWeight: "bold" }}>
          建議改善
        </Typography>
        <Typography sx={{ color: "#767272" }}>
          {electricValue != 3000
            ? "為了控制電費在預算範圍內，您可以考慮在深夜時段啟用冷氣的舒眠模式。舒眠模式可以設定在一定時間後自動關閉冷氣或提高溫度設定，避免冷氣持續運轉過長而浪費電力。根據搜尋結果第3個來源，舒眠模式可以設定在1-24小時後自動關機或調高溫度。這樣可以在維持舒適睡眠環境的同時，節省電力消耗。另外，您也可以考慮將冷氣溫度設定在26-28度之間。根據搜尋結果第4個來源，冷氣溫度每提高1度可節省約6%的用電量。適當調高溫度設定不僅可以節省電費，也有助於身體健康。"
            : "1. 設定冷氣的定時關機功能，例如在睡眠時間後3-4小時自動關機。這樣可以避免冷氣在深夜持續運轉過長而浪費電力。2. 調高冷氣的設定溫度至26-28度，每提高1度可節省約6%的用電量。適當的溫度設定可以兼顧舒適度和節能效果。 3. 定期清潔冷氣濾網，建議每2週清潔一次。髒污的濾網會降低冷氣效率，導致需要調低溫度來獲得相同的冷卻效果，從而增加用電量。"}
        </Typography>
      </Box>
      <Stack sx={{ width: "80vw", marginTop: "30px" }}>
        <Box
          sx={{
            width: "80vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#359FAD",
              fontWeight: "bold",
              fontSize: "20px",
              marginLeft: "15px",
            }}
          >
            睡眠排程
          </Typography>
          <Switch defaultChecked sx={{ marginRight: "15px" }} />
        </Box>
        <LineChart
          xAxis={[
            {
              data: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            },
          ]}
          series={[
            {
              data: [26, 26, 26, 27, 27, 27, 27, 25, 25, 25],
            },
          ]}
          width={350}
          height={300}
        />
        <Box
          sx={{
            width: "80vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginLeft: "15px",
          }}
        >
          <Typography
            sx={{ color: "#359FAD", fontWeight: "bold", fontSize: "20px" }}
          >
            智慧節能定位
          </Typography>
          <Switch sx={{ marginRight: "30px" }} />
        </Box>
        <Box
          sx={{
            width: "80vw",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: "#359FAD",
              fontWeight: "bold",
              fontSize: "20px",
              margin: "15px 0 0 15px",
            }}
          >
            節能提醒助手
          </Typography>
          <Switch sx={{ marginRight: "16px" }} />
        </Box>
        <FormControl
          variant="filled"
          sx={{ margin: "10px 0 0 15px", maxWidth: "100px" }}
        >
          <InputLabel id="demo-simple-select-filled-label">Hour</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={hour}
            onChange={handleHourChange}
          >
            <MenuItem value={4}>4小時</MenuItem>
            <MenuItem value={5}>5小時</MenuItem>
            <MenuItem value={6}>6小時</MenuItem>
          </Select>
        </FormControl>
      </Stack>
      <Box
        sx={{
          width: "100vw",
          display: "flex",
          marginRight: "130px",
          justifyContent: "flex-end",
        }}
      >
        <Box
          sx={{
            width: "110px",
            height: "40px",
            borderRadius: "10px",
            backgroundColor: "#6EADB6",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginY: "10px",
            cursor: "pointer",
          }}
          onClick={() => setOpen(false)}
        >
          我要改善
        </Box>
      </Box>
    </Box>
  );
};

export default Improve;
