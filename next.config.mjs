import { cacheHandler } from './next-cache'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cacheHandler,
  },
}

export default nextConfig
