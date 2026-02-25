import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  // GitHub Pages 用静态导出，ECS 用 standalone
  output: isGhPages ? "export" : "standalone",
  basePath: isGhPages ? "/portfolio-site" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
