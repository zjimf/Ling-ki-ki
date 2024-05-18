import React from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Box, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
const DetailLine = () => {
  const [value, setValue] = React.useState(null);

  return (
    <Box
      sx={{
        width: "90vw",
        height: "75vh",
        backgroundColor: "white",
        marginTop: "10px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Typography sx={{ lineHeight: "50px" }}>目前累積電費</Typography>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          $ 481.3
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Typography sx={{ lineHeight: "50px" }}>預計累積電費</Typography>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          $ 746.15
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Typography sx={{ lineHeight: "50px" }}>自訂電費上限</Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            sx={{ fontSize: "30px", fontWeight: "bold", marginTop: "2px" }}
          >
            $
          </Typography>
          <FormControl sx={{ mx: 1, width: "68px" }} variant="standard">
            <Input
              id="standard-adornment-amount"
              onChange={(e) => setValue(e.target.value)}
              sx={{ fontSize: "30px", fontWeight: "bold" }}
            />
          </FormControl>
        </Box>
      </Box>
      {value === null ? (
        <Alert
          sx={{ width: "300px", margin: "15px 10px 0px 10px" }}
          severity="error"
        >
          請輸入自訂電費上限
        </Alert>
      ) : (
        <Alert
          sx={{ width: "300px", margin: "15px 10px 0px 10px" }}
          severity="info"
        >
          想獲得更多資訊，點選左上角機器人詢問
        </Alert>
      )}
      <Typography
        sx={{
          width: "90vw",
          textAlign: "center",
          color: "#747474",
          marginTop: "20px",
        }}
      >
        累積電費圖
      </Typography>
      <LineChart
        xAxis={[
          {
            data: [
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19,
            ],
          },
        ]}
        series={[
          {
            data: [
              0, 30, 64.5, 64.5, 70, 70, 70, 100, 130, 160, 200, 230, 266, 300,
              330, 330, 370, 420, 460, 481.3,
            ],
            area: true,
          },
        ]}
        width={370}
        height={300}
      />
    </Box>
  );
};

export default DetailLine;
