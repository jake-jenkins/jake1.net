import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;
