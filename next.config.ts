import type { NextConfig } from "next";

const isGhPages = process.env.GITHUB_ACTIONS === "true";

const basePath = isGhPages ? "/portfolio-site" : "";

const nextConfig: NextConfig = {
  // GitHub Pages 用静态导出，ECS 用 standalone
  output: isGhPages ? "export" : "standalone",
  basePath,
  images: {
    unoptimized: true,
  },
  // 让组件能通过 process.env.NEXT_PUBLIC_BASE_PATH 获取 basePath
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
