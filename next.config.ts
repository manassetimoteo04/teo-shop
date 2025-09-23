import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "img.shields.io",
      "store.storeimages.cdn-apple.com",
      "developer.apple.com",
      "upload.wikimedia.org",
    ],
  },
};

export default nextConfig;
