/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // @ts-ignore
    cacheHandler: require('./next-cache-handler.js').handler,
  },
}

module.exports = nextConfig
