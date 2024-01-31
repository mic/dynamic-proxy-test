import { createProxyMiddleware } from "http-proxy-middleware";

const setupRoute = (app) => {
  app.use(
    "/new",
    createProxyMiddleware({ target: "http://yahoo.com", changeOrigin: true })
  );
};

export default setupRoute;
