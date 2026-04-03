import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { hostname: "res.cloudinary.com" },
    ],
  },
  trailingSlash: true,
};

export default nextConfig;
