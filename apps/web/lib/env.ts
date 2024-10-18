import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    SANITY_PROJECT_ID: z.string().url().optional().default('h3qnoixv'),
  },
  experimental__runtimeEnv: process.env,
})
