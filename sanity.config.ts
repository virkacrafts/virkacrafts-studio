import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'virkacrafts',
  title: 'VirkaCrafts Content Studio',
  projectId: 'itnvs0vu',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S, context) => S.list()
        .title('VirkaCrafts Content')
        .items([
          orderableDocumentListDeskItem({
            type: 'guide',
            title: 'Stitch Guides — drag to order',
            S,
            context,
          }),
          ...S.documentTypeListItems().filter((item) => item.getId() !== 'guide'),
        ]),
    }),
    visionTool(),
  ],
  schema: {types: schemaTypes},
})
