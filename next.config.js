const nextConfig = {
  reactStrictMode: true,
  cacheHandler: require.resolve('./next-cache-handler.mjs'),
  cacheMaxMemorySize: 0,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
}

module.exports = nextConfig
