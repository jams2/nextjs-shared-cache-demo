const { cacheHandler } = require('@neshca/cache-handler')

const handler = cacheHandler({
  maxMemorySize: 0.5,
  enableInMemory: true,
  enableFileSystem: true,
})

module.exports = { handler }
