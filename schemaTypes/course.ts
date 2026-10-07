import {defineField, defineType} from 'sanity'

export const course = defineType({
  name: 'course', title: 'Courses', type: 'document',
  fields: [
    defineField({name: 'title', title: 'Course title', type: 'string', validation: r => r.required()}),
    defineField({name: 'slug', title: 'URL slug', type: 'slug', options: {source: 'title'}, validation: r => r.required()}),
    defineField({name: 'level', title: 'Skill level', type: 'string', options: {list: ['Basic', 'Intermediate', 'Advanced']}, initialValue: 'Basic'}),
    defineField({name: 'summary', title: 'Short summary', type: 'text', rows: 3, validation: r => r.required()}),
    defineField({name: 'courseLogo', title: 'Course logo', type: 'image', options: {hotspot: true}, description: 'Optional logo shown on the course card.'}),
    defineField({name: 'coverImage', title: 'Course cover image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'sampleImage', title: 'Lesson sample image', type: 'image', options: {hotspot: true}, description: 'A sample image for this Basic, Intermediate, or Advanced course.'}),
    defineField({name: 'symbolImage', title: 'Course symbol image', type: 'image', options: {hotspot: true}, description: 'Optional chart, symbol, or icon image.'}),
    defineField({name: 'lessonImages', title: 'Three lesson PNG images', type: 'array', of: [{type: 'image', options: {hotspot: true}}], validation: r => r.max(3), description: 'Upload up to three PNG lesson images.'}),
    defineField({name: 'description', title: 'Full course description', type: 'array', of: [{type: 'block'}]}),
    defineField({name: 'guides', title: 'Included stitch guides', type: 'array', of: [{type: 'reference', to: [{type: 'guide'}]}]}),
    defineField({name: 'isPublished', title: 'Published', type: 'boolean', initialValue: true}),
  ],
  preview: {select: {title: 'title', subtitle: 'level', media: 'coverImage'}},
})
