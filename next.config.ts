import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      net: false,
      tls: false,
      fs: false,
      child_process: false,
      http2: false, // Yeh add kar
      http: false,
      https: false,
    };
    return config;
  },
};

export default nextConfig;
