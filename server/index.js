const express = require("express"),
  app = express(),
  http = require("http"),
  cors = require("cors");

const server = http.createServer(app);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from server");
});

const PORT = process.env.PORT || 3003;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
