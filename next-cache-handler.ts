import { cacheHandler } from '@neshca/cache-handler'
import type { CacheHandler } from '@neshca/cache-handler'

export const handler: CacheHandler = cacheHandler({
  maxMemorySize: 0.5,
  enableInMemory: true,
  enableFileSystem: true,
})
