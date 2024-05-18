import React, { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Button,
  CircularProgress,
} from "@mui/material";

const ExtensionPop = ({ imageTarget, title }) => {
  const [downloadState, setDownloadState] = useState("notDownloaded"); // notDownloaded, downloading, downloaded
  const [uninstallDisabled, setUninstallDisabled] = useState(true);

  const handleDownload = () => {
    setDownloadState("downloading");
    setTimeout(() => {
      setDownloadState("downloaded");
      setUninstallDisabled(false);
    }, 3000);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{
            height: 80,
            width: 80,
          }}
          src={imageTarget}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            marginLeft: "20px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
            {title}
          </Typography>
          <Typography
            sx={{ fontWeight: "bold", fontSize: "10px", color: "gray" }}
          >
            開發者：北極熊哥
          </Typography>
          <Stack direction="row" spacing={2} sx={{ marginTop: "10px" }}>
            {downloadState === "downloading" ? (
              <Box
                sx={{
                  width: "80px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CircularProgress size={25} />
              </Box>
            ) : (
              <Button
                variant="contained"
                disabled={downloadState === "downloaded"}
                sx={{ width: "80px", height: "30px", fontSize: "10px" }}
                onClick={handleDownload}
              >
                {downloadState === "downloaded" ? "已下載" : "下載"}
              </Button>
            )}
            <Button
              variant="contained"
              disabled={uninstallDisabled}
              color="error"
              sx={{ width: "80px", height: "30px", fontSize: "10px" }}
            >
              解除安裝
            </Button>
          </Stack>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          夏天必備「冷」笑話套件！
        </Typography>
        <Typography
          sx={{ fontSize: "12px", color: "#7E7E7E", marginBottom: "10px" }}
        >
          你是否預算有限，不想開冷氣但又想降溫？試試我們的新擴充套件吧！這款工具專為小資族設計，能自動生成幽默的冷笑話，讓你在炎熱的天氣中笑到降溫。
          <Box sx={{ marginY: "5px" }} />
          簡單安裝，輕鬆享受，不僅省錢還能帶來無限樂趣。立即下載，讓冷笑話陪你度過炎夏！
        </Typography>
        <Typography
          sx={{ color: "#BF3B3B", fontWeight: "bold", fontSize: "12px" }}
        >
          下載次數：12,988
        </Typography>
      </Box>
    </Box>
  );
};

export default ExtensionPop;
