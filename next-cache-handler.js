const Redis = require('ioredis')

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options
  }

  async get(key) {
    const result = await redis.get(key)
    return JSON.parse(result)
  }

  async set(key, data, ctx) {
    // This could be stored anywhere, like durable storage
      console.log(ctx)
    redis.set(
      key,
      JSON.stringify({
        value: data,
        lastModified: Date.now(),
        tags: ctx.tags,
      })
    )
  }

  async revalidateTag(tag) {
    // Iterate over all entries in the cache
    for (let [key, value] of cache) {
      // If the value's tags include the specified tag, delete this entry
      if (value.tags.includes(tag)) {
        cache.delete(key)
      }
    }
  }
}
