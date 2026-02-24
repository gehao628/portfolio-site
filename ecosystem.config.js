module.exports = {
  apps: [
    {
      name: "portfolio",
      script: ".next/standalone/server.js",
      cwd: "/opt/portfolio-site",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
    },
  ],
};
