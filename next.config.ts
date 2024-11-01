import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jjx.lon1.cdn.digitaloceanspaces.com",
      }
    ]
  }
};

export default nextConfig;
