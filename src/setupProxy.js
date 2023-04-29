const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/v1",
    createProxyMiddleware({
      target: "https://api.skrrteam.com",
      changeOrigin: true,
    })
  );
};
