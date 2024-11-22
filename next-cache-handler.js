const Redis = require('ioredis')

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

async function handler(params) {
  const { key, data, revalidate } = params

  if (data) {
    await redis.set(key, JSON.stringify(data), 'EX', revalidate)
    return data
  }

  const value = await redis.get(key)
  return value ? JSON.parse(value) : null
}

module.exports = { handler }
