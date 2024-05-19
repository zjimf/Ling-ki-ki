const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 8000;
app.use(bodyParser.json());
app.use(cors());

app.post("/chat", async (req, res) => {
  console.log(req.body);
  const { message } = req.body;
  console.log(message.toLowerCase());
  let reply;

  switch (message.toLowerCase()) {
    case "切換模式":
      reply = "已切換至'最舒適'模式";
      break;
    case "用電分析":
      reply = "預計累積電費(調整後)：713";
      break;
    default:
      try {
        const fetch = await import("node-fetch").then((mod) => mod.default);
        const response = await fetch(
          "https://91wycdywdg.execute-api.us-west-2.amazonaws.com/default/knowledge-base-post-article",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              prompt: message,
              useKnowledgeBase: true,
            }),
          }
        );

        const jsonData = await response.json();
        console.log(jsonData);
        reply = jsonData.output || "No response from knowledge base.";
      } catch (err) {
        console.log("錯誤:", err);
        reply = "An error occurred while contacting the knowledge base.";
      }
      break;
  }

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
