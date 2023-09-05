/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "export",
  trailingSlash: true,
  distDir: "dist",
  assetPrefix: "./",
  images: {
    unoptimized: true
  },
};

module.exports = nextConfig;
