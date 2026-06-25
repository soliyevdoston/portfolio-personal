import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {
    root: path.resolve("."),
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
