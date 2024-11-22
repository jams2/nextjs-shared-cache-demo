import type { NextConfig } from 'next'
import { cacheHandler } from './next-cache'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    cacheHandler,
  },
}

export default nextConfig
