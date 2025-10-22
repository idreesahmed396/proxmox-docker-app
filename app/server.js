import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Hello from Node.js running in Docker on Proxmox!");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("App running on port 3000");
});
