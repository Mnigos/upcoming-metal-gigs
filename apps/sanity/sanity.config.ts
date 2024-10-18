import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { schemaTypes } from './schema-types'

export default defineConfig({
  name: 'default',
  title: 'upcoming-metal-gigs',
  projectId: 'h3qnoixv',
  dataset: 'production',
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
