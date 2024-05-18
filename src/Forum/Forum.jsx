import React, { useState } from "react";
import { Box } from "@mui/material";
import Switch from "../Public/Components/Switch/Switch";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Extension from "./Extension";
import Discuss from "./Discuss";
import Popup from "reactjs-popup";
const Forum = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Switch
        left={"延伸套件"}
        right={"討論版"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 320,
          mt: 2,
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="搜尋一下吧"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {currentTab === 0 ? <Extension /> : <Discuss />}
      </Box>
    </Box>
  );
};

export default Forum;
