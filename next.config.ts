import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  output: "export",
  basePath: "portfolio"
};

export default nextConfig;
