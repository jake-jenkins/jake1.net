import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['next-mdx-remote'],
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=3571000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(); battery=(); geolocation=(); microphone=()'
          },
        ],
      },
    ]
  },
};

export default nextConfig;
