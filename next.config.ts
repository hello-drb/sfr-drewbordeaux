import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "cdn.sanity.io" },
      { hostname: "res.cloudinary.com" },
    ],
  },
};

export default nextConfig;
