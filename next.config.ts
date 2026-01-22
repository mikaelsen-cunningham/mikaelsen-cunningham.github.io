import { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "" : "",
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
