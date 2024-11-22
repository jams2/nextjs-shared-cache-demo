/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // @ts-ignore
    cacheHandler: (await import('./next-cache-handler.js')).handler,
  },
}

export default nextConfig
