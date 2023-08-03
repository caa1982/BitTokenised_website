/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-next-app/" : "",
};

module.exports = nextConfig;
