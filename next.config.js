/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["1000logos.net", "encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
