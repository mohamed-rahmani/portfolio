import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "f904f9-3.myshopify.com",
      },
      {
        protocol: "https",
        hostname: "www.icegif.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "lyceeutrillo.fr",
      },
    ],
  },
};

export default nextConfig;
