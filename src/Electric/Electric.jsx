import React, { useState } from "react";
import { Box } from "@mui/material";
import Switch from "../Public/Components/Switch/Switch";
import Date from "./Date";
import Detail from "./Detail";
const Electric = () => {
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Switch
        left={"當期"}
        right={"日"}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      />
      <Date />
      <Detail />
    </Box>
  );
};

export default Electric;
