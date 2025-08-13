import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/karanbadlani-portfolio',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
};

export default nextConfig;
