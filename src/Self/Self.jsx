import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import Switch from "@mui/material/Switch";

const Self = () => {
  const loaded = sessionStorage.getItem("extension");
  const [mode, setMode] = useState("最節省");

  const handleChange = (event) => {
    setMode(event.target.value);
  };
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          marginY: "30px",
        }}
      >
        <Avatar>H</Avatar>
        <Typography sx={{ textAlign: "center", color: "#797979" }}>
          Hao
        </Typography>
        <Typography sx={{ textAlign: "center", color: "#797979" }}>
          haoicoding@gmail.com
        </Typography>
      </Stack>
      <Box
        sx={{
          width: "90vw",
          height: "10vh",
          backgroundColor: "white",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Typography sx={{ color: "#9E9E9E" }}>使用者模式切換</Typography>
        <Box sx={{ minWidth: 150 }}>
          <FormControl fullWidth>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mode}
              onChange={handleChange}
            >
              <MenuItem value={"最節省"}>最節省</MenuItem>
              <MenuItem value={"最舒適"}>最舒適</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box
        sx={{
          width: "90vw",
          height: "10vh",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            margin: "50px 0 5px 8px",
            color: "#797979",
            marginBottom: "10px",
          }}
        >
          我的延伸套件
        </Typography>
        <Box
          sx={{
            width: "90vw",
            height: "30vh",
            backgroundColor: "white",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {loaded === "loaded" ? (
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              sx={{ paddingY: "10px" }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "15px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 40,
                    width: 40,
                  }}
                  src={image1}
                />
                <Typography sx={{ marginLeft: "15px", fontWeight: "bold" }}>
                  Líng-ki-ki 
                </Typography>
              </Box>
              <Switch defaultChecked sx={{ marginRight: "15px" }} />
            </Stack>
          ) : (
            ""
          )}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingY: "10px" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15px",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 40,
                  width: 40,
                }}
                src={image2}
              />
              <Typography sx={{ marginLeft: "15px", fontWeight: "bold" }}>
                日曆冷氣
              </Typography>
            </Box>
            <Switch defaultChecked sx={{ marginRight: "15px" }} />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Self;
