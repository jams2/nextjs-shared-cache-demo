import { cacheHandler } from '@neshca/cache-handler'

const handler = cacheHandler({
  // Optional: configure cache settings
  // maxMemorySize: 0.5, // Use 50% of available memory
  // enableInMemory: true,
  // enableFileSystem: true,
})

export default handler
