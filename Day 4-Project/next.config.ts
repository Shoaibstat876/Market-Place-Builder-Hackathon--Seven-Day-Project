import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Keep your Sanity.io domain
      },
    ],
  },
};

export default nextConfig;
