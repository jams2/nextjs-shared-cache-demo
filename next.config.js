const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  cacheHandler: require.resolve('./next-cache-handler.mjs'),
  cacheMaxMemorySize: 0,
  // instrumentation.ts fails without the following
  // https://github.com/caching-tools/next-shared-cache/issues/777#issuecomment-2451805388
  transpilePackages: ['@neshca/cache-handler'],
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  experimental: {
    instrumentationHook: true,
  },
}

module.exports = nextConfig
