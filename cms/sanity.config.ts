import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { codeInput } from "@sanity/code-input"
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'homepage',

  projectId: 'r4l4xmqo',
  dataset: 'production',

  plugins: [deskTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
