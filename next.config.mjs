import { handler } from './next-cache.js'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cacheHandler,
  },
}

export default nextConfig
