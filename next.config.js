/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ["www.bing.com"],
  },
};

module.exports = nextConfig
