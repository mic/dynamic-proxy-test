import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";
import setupRoute from "./lib/setupRoute.mjs";

const app = express();
const PORT = 3030;

// API requests go to the API server
app.use(
  "/api",
  createProxyMiddleware({ target: "http://google.com", changeOrigin: true })
);

// Other requests go to the app server
app.get("/add", (req, res) => {
  setupRoute(app);
  return res.status(200).json({ message: "Route added" });
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
