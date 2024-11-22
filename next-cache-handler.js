const { createClient } = require('redis')
const createRedisHandler = require('@neshca/cache-handler/redis-strings')

const client = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
})

client.connect()

const handler = createRedisHandler({
  client,
  keyPrefix: 'cache:',
  timeoutMs: 5000,
  keyExpirationStrategy: 'EXAT',
})

module.exports = handler
