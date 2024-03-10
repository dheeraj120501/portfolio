import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { inlineSvgInput } from '@focus-reactive/sanity-plugin-inline-svg-input'
import { studioStructure } from './studioStructure'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'vkddxwml',
  dataset: 'production',

  plugins: [structureTool({structure: studioStructure}), visionTool(), inlineSvgInput()],

  schema: {
    types: schemaTypes,
  },

})
