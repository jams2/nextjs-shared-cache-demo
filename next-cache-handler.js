const { cacheHandler } = require('@neshca/cache-handler')
const Redis = require('ioredis')

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

const handler = cacheHandler({
  cache: {
    get: async (key) => {
      const value = await redis.get(key)
      return value ? JSON.parse(value) : null
    },
    set: async (key, value, ttl) => {
      await redis.set(key, JSON.stringify(value), 'EX', Math.floor(ttl / 1000))
    },
  },
  maxMemorySize: 0.5,
  enableInMemory: true,
  enableFileSystem: false,
})

module.exports = { handler }
