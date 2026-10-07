import {defineField, defineType} from 'sanity'

export const guide = defineType({
  name: 'guide', title: 'Stitch Guides', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Stitch name', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', title: 'URL slug', type: 'slug', options: {source: 'title'}, validation: r => r.required()}),
    defineField({name: 'level', title: 'Skill level', type: 'string', options: {list: ['Basic', 'Advanced']}, initialValue: 'Basic'}),
    defineField({name: 'stitchImage', title: 'Stitch sample image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'usAbbreviation', title: 'US abbreviation', type: 'string'}),
    defineField({name: 'ukAbbreviation', title: 'UK abbreviation', type: 'string'}),
    defineField({name: 'stitchSymbol', title: 'Stitch symbol', type: 'string'}),
    defineField({name: 'stitchSymbolImage', title: 'Stitch symbol image', type: 'image', options: {hotspot: true}, description: 'Use this when the stitch symbol is an image rather than a text character.'}),
    defineField({name: 'referenceImages', title: 'Three reference PNG images', type: 'array', of: [{type: 'image', options: {hotspot: true}}], validation: r => r.max(3), description: 'Upload up to three supporting PNG images for Basic or Advanced stitches.'}),
    defineField({name: 'instructions', title: 'Written instructions', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'instructionPdf', title: 'Detailed instructions PDF', type: 'file', options: {accept: 'application/pdf'}, description: 'Optional downloadable PDF for this stitch guide.'}),
    defineField({name: 'steps', title: 'Step-by-step media', type: 'array', of: [{type: 'object', fields: [
      defineField({name: 'title', title: 'Step title', type: 'string'}),
      defineField({name: 'text', title: 'Step instructions', type: 'text', rows: 3}),
      defineField({name: 'image', title: 'Image / animation preview', type: 'image', options: {hotspot: true}}),
      defineField({name: 'animationFile', title: 'Animated GIF/WebP file', type: 'file', options: {accept: 'image/gif,image/webp'}}),
    ]}]}),
    defineField({name: 'isPublished', title: 'Published', type: 'boolean', initialValue: true}),
  ],
  preview: {select: {title: 'title', subtitle: 'level', media: 'stitchImage'}},
})
